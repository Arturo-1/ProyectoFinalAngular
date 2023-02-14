export class inscripcion {
    constructor(
        public id: number,
        public nombre_alumno: string,
        public apellidos_alumno: string,
        public nombre_curso: string,
        public fecha_inscripcion: Date,
    ) {}
}