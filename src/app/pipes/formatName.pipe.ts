import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName',
  standalone: true,
})
export class FormatNamePipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if (!value) return '';
    return value?.toLocaleUpperCase();
  }
}
