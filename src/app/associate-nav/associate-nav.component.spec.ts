
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AssociateNavComponent } from './associate-nav.component';

describe('AssociateNavComponent', () => {
  let component: AssociateNavComponent;
  let fixture: ComponentFixture<AssociateNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [AssociateNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
