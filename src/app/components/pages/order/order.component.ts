import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, ValidationErrors, Validators} from '@angular/forms';
import {FormOrder, OrderResponse} from "../../../models/order.model";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  formSubmitted: boolean = false;
  submissionError: boolean = false;
  isSubmitting: boolean = false;
  productTitle: string = '';


  orderForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[А-Яа-яЁёA-Za-z\s]+$/)]],
    last_name: ['', [Validators.required, Validators.pattern(/^[А-Яа-яЁёA-Za-z\s]+$/)]],
    phone: ['', [Validators.required, this.phoneValidator]],
    country: ['', Validators.required],
    zip: ['', Validators.required],
    address: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-я0-9\s\-\/]+$/)]],
    product: [{value: '', disabled: true}],
    comment: ['']
  });

  phoneValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const digitsOnly = value.replace(/\D/g, '');
    const validFormat = /^\+?\d+$/.test(value);

    if (!validFormat || digitsOnly.length !== 11) {
      return {invalidPhone: true};
    }
    return null;
  }

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService
  ) {
  }

  get name() {
    return this.orderForm.get('name');
  }

  get last_name() {
    return this.orderForm.get('last_name');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  get country() {
    return this.orderForm.get('country');
  }

  get zip() {
    return this.orderForm.get('zip');
  }

  get address() {
    return this.orderForm.get('address');
  }

  ngOnInit(): void {

    const storedProductTitle = localStorage.getItem('productTitle');
    if (storedProductTitle) {
      this.productTitle = storedProductTitle;
      this.orderForm.get('product')?.setValue(storedProductTitle);
    }
  }

  submitOrder(): void {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const orderData: FormOrder = this.orderForm.getRawValue() as FormOrder;

    this.orderService.submitOrder(orderData).subscribe({
      next: (response) => {
        this.isSubmitting = false;

        if (response.success === 1) {
          this.formSubmitted = true;
        } else {
          this.submissionError = true;
          setTimeout(() => (this.submissionError = false), 3000);
        }
      },
      error: () => {
        this.isSubmitting = false;
        this.submissionError = true;
        setTimeout(() => (this.submissionError = false), 3000);
      }
    });
  }
}
