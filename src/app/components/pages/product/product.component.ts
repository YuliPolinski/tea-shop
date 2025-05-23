import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeaService } from '../../../services/tea.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private teaService: TeaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teaService.getTea().subscribe(data => {
      this.product = data.find((item: any) => item.id === id);
      this.isLoading = false;
    });
  }

  goToOrder(): void {
    this.router.navigate(['/order'], {
      state: { productTitle: this.product.title }
    });
  }
}
