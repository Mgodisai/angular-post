import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(stringToBeTruncated: string, limit: number = 10): string {
    if (!stringToBeTruncated) return '';
    if (stringToBeTruncated.length <= limit) return stringToBeTruncated;

    return stringToBeTruncated.substring(0, limit) + '...';
  }
}
