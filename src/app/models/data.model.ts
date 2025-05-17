export interface Data {
  id?: string;          // Опциональный, так как API генерирует ID
  title: string;        // Важно: поле должно называться 'title' (не 'name'), если API использует именно такое название
  description: string;
  difficulty?: string;  // Опциональное поле, если используется
  createdAt?: Date;     // Опционально, если API возвращает дату
}