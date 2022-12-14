/* eslint-disable prettier/prettier */
import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova mensagem.');
    expect(content).toBeTruthy();
  });
  
  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('AAAA')).toThrow();
  });
  
  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
})

