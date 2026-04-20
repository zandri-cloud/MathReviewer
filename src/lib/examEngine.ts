import { ExamProblem } from '../data/examData';

export function hashString(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

export function mulberry32(a: number) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

export class QuestionEngine {
    private pool: ExamProblem[];
    private rng: () => number;

    constructor(pool: ExamProblem[], seedStr: string) {
        this.pool = pool;
        this.rng = mulberry32(hashString(seedStr));
    }

    generateExam(): ExamProblem[] {
        // Filter out problems without answers
        const validPool = this.pool.filter(p => p.answer && p.answer.trim() !== '');

        // Weighting: 70% Hard, 20% Medium, 10% Easy
        const hardPool = validPool.filter(p => p.difficulty === 'hard' || p.difficulty === 'very_hard' || p.difficulty === 'boss');
        const mediumPool = validPool.filter(p => p.difficulty === 'medium');
        const easyPool = validPool.filter(p => p.difficulty === 'easy');

        const selected: ExamProblem[] = [];

        // Select 7 Hard
        for (let i = 0; i < 7; i++) {
            if (hardPool.length > 0) {
                const idx = Math.floor(this.rng() * hardPool.length);
                selected.push(hardPool.splice(idx, 1)[0]);
            }
        }

        // Select 2 Medium
        for (let i = 0; i < 2; i++) {
            if (mediumPool.length > 0) {
                const idx = Math.floor(this.rng() * mediumPool.length);
                selected.push(mediumPool.splice(idx, 1)[0]);
            }
        }

        // Select 1 Easy
        for (let i = 0; i < 1; i++) {
            if (easyPool.length > 0) {
                const idx = Math.floor(this.rng() * easyPool.length);
                selected.push(easyPool.splice(idx, 1)[0]);
            }
        }

        // Shuffle the final 10
        for (let i = selected.length - 1; i > 0; i--) {
            const j = Math.floor(this.rng() * (i + 1));
            [selected[i], selected[j]] = [selected[j], selected[i]];
        }

        return selected;
    }
}

export class AnswerValidator {
    static normalizeAnswer(ans: string) {
        if (!ans) return '';
        let normalized = ans.toLowerCase();
        
        // Remove y' = or y = or f'(x) = 
        normalized = normalized.replace(/^y'=?/, '').replace(/^y=?/, '');
        normalized = normalized.replace(/^f'\(x\)=?/, '').replace(/^f\(x\)=?/, '');
        
        normalized = normalized.replace(/\s+/g, '');
        normalized = normalized.replace(/\\left/g, '').replace(/\\right/g, '');
        normalized = normalized.replace(/\\cdot/g, '*').replace(/\\times/g, '*');
        normalized = normalized.replace(/sine/g, 'sin').replace(/cosine/g, 'cos').replace(/tangent/g, 'tan');
        
        // Convert \frac{a}{b} to (a)/(b)
        let prev = '';
        while (normalized !== prev) {
            prev = normalized;
            normalized = normalized.replace(/\\frac{([^{}]+)}{([^{}]+)}/g, '($1)/($2)');
        }
        
        // Remove remaining backslashes
        normalized = normalized.replace(/\\/g, '');
        
        // Remove parentheses around simple alphanumeric sequences (e.g. (8) -> 8, (2x) -> 2x)
        normalized = normalized.replace(/\(([a-z0-9]+)\)/g, '$1');
        
        return normalized;
    }

    static checkAnswer(studentAns: string, correctAns: string): number {
        const normStudent = this.normalizeAnswer(studentAns);
        const normCorrect = this.normalizeAnswer(correctAns);
        
        if (normStudent === normCorrect) return 20;
        
        // Partial credit logic (very basic structural match)
        if (normStudent.length > 0 && normCorrect.includes(normStudent)) return 10;
        
        return 0;
    }
}

export class SoundController {
    static submitSound = new Audio('https://actions.google.com/sounds/v1/ui/button_click.ogg');
    static successSound = new Audio('https://actions.google.com/sounds/v1/cartoon/cartoon_success_fanfare.ogg');
    static failSound = new Audio('https://actions.google.com/sounds/v1/cartoon/fail_trumpet.ogg');
    static timeoutSound = new Audio('https://actions.google.com/sounds/v1/alarms/buzzer_alarm.ogg');

    static playSubmit() {
        this.submitSound.currentTime = 0;
        this.submitSound.play().catch(e => console.warn('Audio play failed (Submit):', e));
    }

    static playSuccess() {
        this.successSound.currentTime = 0;
        this.successSound.play().catch(e => console.warn('Audio play failed (Success):', e));
    }

    static playFail() {
        this.failSound.currentTime = 0;
        this.failSound.play().catch(e => console.warn('Audio play failed (Fail):', e));
    }

    static playTimeout() {
        this.timeoutSound.currentTime = 0;
        this.timeoutSound.play().catch(e => console.warn('Audio play failed (Timeout):', e));
    }
}
