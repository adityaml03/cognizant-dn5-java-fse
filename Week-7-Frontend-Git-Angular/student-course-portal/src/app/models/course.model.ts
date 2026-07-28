export interface Course {
  id: number | string;
  name: string;
  description: string;
  instructor: string;
  duration: string;
  code?: string;
  credits?: number;
  gradeStatus?: string;
}