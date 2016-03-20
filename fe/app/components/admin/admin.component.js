System.register(["angular2/core", 'angular2/router', '../admin/admin.login.component', '../admin/admin.index.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, admin_login_component_1, admin_index_component_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (admin_login_component_1_1) {
                admin_login_component_1 = admin_login_component_1_1;
            },
            function (admin_index_component_1_1) {
                admin_index_component_1 = admin_index_component_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent() {
                }
                AdminComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/layout/admin/admin.index.html',
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/board/...',
                            name: 'Board',
                            component: admin_index_component_1.AdminIndexComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/login',
                            name: 'Login',
                            component: admin_login_component_1.AdminLoginComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
//# sourceMappingURL=admin.component.js.map