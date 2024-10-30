import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AndroidFingerprintAuth = /** @class */ (function (_super) {
    __extends(AndroidFingerprintAuth, _super);
    function AndroidFingerprintAuth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience property containing all possible errors
         */
        _this.ERRORS = {
            BAD_PADDING_EXCEPTION: 'BAD_PADDING_EXCEPTION',
            CERTIFICATE_EXCEPTION: 'CERTIFICATE_EXCEPTION',
            FINGERPRINT_CANCELLED: 'FINGERPRINT_CANCELLED',
            FINGERPRINT_DATA_NOT_DELETED: 'FINGERPRINT_DATA_NOT_DELETED',
            FINGERPRINT_ERROR: 'FINGERPRINT_ERROR',
            FINGERPRINT_NOT_AVAILABLE: 'FINGERPRINT_NOT_AVAILABLE',
            FINGERPRINT_PERMISSION_DENIED: 'FINGERPRINT_PERMISSION_DENIED',
            FINGERPRINT_PERMISSION_DENIED_SHOW_REQUEST: 'FINGERPRINT_PERMISSION_DENIED_SHOW_REQUEST',
            ILLEGAL_BLOCK_SIZE_EXCEPTION: 'ILLEGAL_BLOCK_SIZE_EXCEPTION',
            INIT_CIPHER_FAILED: 'INIT_CIPHER_FAILED',
            INVALID_ALGORITHM_PARAMETER_EXCEPTION: 'INVALID_ALGORITHM_PARAMETER_EXCEPTION',
            IO_EXCEPTION: 'IO_EXCEPTION',
            JSON_EXCEPTION: 'JSON_EXCEPTION',
            MINIMUM_SDK: 'MINIMUM_SDK',
            MISSING_ACTION_PARAMETERS: 'MISSING_ACTION_PARAMETERS',
            MISSING_PARAMETERS: 'MISSING_PARAMETERS',
            NO_SUCH_ALGORITHM_EXCEPTION: 'NO_SUCH_ALGORITHM_EXCEPTION',
            SECURITY_EXCEPTION: 'SECURITY_EXCEPTION',
        };
        return _this;
    }
    AndroidFingerprintAuth.prototype.encrypt = function (options) { return cordova(this, "encrypt", {}, arguments); };
    AndroidFingerprintAuth.prototype.decrypt = function (options) { return cordova(this, "decrypt", {}, arguments); };
    AndroidFingerprintAuth.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    AndroidFingerprintAuth.prototype.delete = function (options) { return cordova(this, "delete", {}, arguments); };
    AndroidFingerprintAuth.pluginName = "AndroidFingerprintAuth";
    AndroidFingerprintAuth.plugin = "cordova-plugin-android-fingerprint-auth";
    AndroidFingerprintAuth.pluginRef = "FingerprintAuth";
    AndroidFingerprintAuth.repo = "https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth";
    AndroidFingerprintAuth.platforms = ["Android"];
    AndroidFingerprintAuth.decorators = [
        { type: Injectable }
    ];
    return AndroidFingerprintAuth;
}(IonicNativePlugin));
export { AndroidFingerprintAuth };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FuZHJvaWQtZmluZ2VycHJpbnQtYXV0aC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErSjVCLDBDQUFpQjs7O1FBQzNEOztXQUVHO1FBQ0gsWUFBTSxHQW1CRjtZQUNGLHFCQUFxQixFQUFFLHVCQUF1QjtZQUM5QyxxQkFBcUIsRUFBRSx1QkFBdUI7WUFDOUMscUJBQXFCLEVBQUUsdUJBQXVCO1lBQzlDLDRCQUE0QixFQUFFLDhCQUE4QjtZQUM1RCxpQkFBaUIsRUFBRSxtQkFBbUI7WUFDdEMseUJBQXlCLEVBQUUsMkJBQTJCO1lBQ3RELDZCQUE2QixFQUFFLCtCQUErQjtZQUM5RCwwQ0FBMEMsRUFBRSw0Q0FBNEM7WUFDeEYsNEJBQTRCLEVBQUUsOEJBQThCO1lBQzVELGtCQUFrQixFQUFFLG9CQUFvQjtZQUN4QyxxQ0FBcUMsRUFBRSx1Q0FBdUM7WUFDOUUsWUFBWSxFQUFFLGNBQWM7WUFDNUIsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQyxXQUFXLEVBQUUsYUFBYTtZQUMxQix5QkFBeUIsRUFBRSwyQkFBMkI7WUFDdEQsa0JBQWtCLEVBQUUsb0JBQW9CO1lBQ3hDLDJCQUEyQixFQUFFLDZCQUE2QjtZQUMxRCxrQkFBa0IsRUFBRSxvQkFBb0I7U0FDekMsQ0FBQzs7O0lBUUYsd0NBQU8sYUFBQyxPQUF1QjtJQVUvQix3Q0FBTyxhQUFDLE9BQXVCO0lBUy9CLDRDQUFXO0lBVVgsdUNBQU0sYUFBQyxPQUF5Qjs7Ozs7OztnQkFoRmpDLFVBQVU7O2lDQS9KWDtFQWdLNEMsaUJBQWlCO1NBQWhELHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFGQUF1dGhPcHRpb25zIHtcbiAgLyoqXG4gICAqIFJlcXVpcmVkXG4gICAqIFVzZWQgYXMgdGhlIGFsaWFzIGZvciB5b3VyIGtleSBpbiB0aGUgQW5kcm9pZCBLZXkgU3RvcmUuXG4gICAqL1xuICBjbGllbnRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGNyZWF0ZSBjcmVkZW50aWFsIHN0cmluZyBmb3IgZW5jcnlwdGVkIHRva2VuIGFuZCBhcyBhbGlhcyB0byByZXRyaWV2ZSB0aGUgY2lwaGVyLlxuICAgKi9cbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gY3JlYXRlIGNyZWRlbnRpYWwgc3RyaW5nIGZvciBlbmNyeXB0ZWQgdG9rZW5cbiAgICovXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXF1aXJlZCBmb3IgZGVjcnlwdCgpXG4gICAqIEVuY3J5cHRlZCB1c2VyIGNyZWRlbnRpYWxzIHRvIGRlY3J5cHQgdXBvbiBzdWNjZXNzZnVsIGF1dGhlbnRpY2F0aW9uLlxuICAgKi9cbiAgdG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHJlbW92ZSB0aGUgXCJVU0UgQkFDS1VQXCIgYnV0dG9uXG4gICAqL1xuICBkaXNhYmxlQmFja3VwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBsYW5ndWFnZS4gKGVuX1VTIG9yIGVzKVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGV2aWNlIG1heCBpcyA1IGF0dGVtcHRzLiBTZXQgdGhpcyBwYXJhbWV0ZXIgaWYgeW91IHdhbnQgdG8gYWxsb3cgZmV3ZXIgdGhhbiA1IGF0dGVtcHRzLlxuICAgKi9cbiAgbWF4QXR0ZW1wdHM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlcXVpcmUgdGhlIHVzZXIgdG8gYXV0aGVudGljYXRlIHdpdGggYSBmaW5nZXJwcmludCB0byBhdXRob3JpemUgZXZlcnkgdXNlIG9mIHRoZSBrZXkuXG4gICAqIE5ldyBmaW5nZXJwcmludCBlbnJvbGxtZW50IHdpbGwgaW52YWxpZGF0ZSBrZXkgYW5kIHJlcXVpcmUgYmFja3VwIGF1dGhlbnRpY2F0ZSB0b1xuICAgKiByZS1lbmFibGUgdGhlIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIGRpYWxvZy5cbiAgICovXG4gIHVzZXJBdXRoUmVxdWlyZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHRpdGxlIG9mIHRoZSBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBkaWFsb2cuXG4gICAqL1xuICBkaWFsb2dUaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRoZSBtZXNzYWdlIG9mIHRoZSBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBkaWFsb2cuXG4gICAqL1xuICBkaWFsb2dNZXNzYWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGhpbnQgZGlzcGxheWVkIGJ5IHRoZSBmaW5nZXJwcmludCBpY29uIG9uIHRoZSBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBkaWFsb2cuXG4gICAqL1xuICBkaWFsb2dIaW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFGQURlY3J5cHRPcHRpb25zIHtcbiAgLyoqXG4gICAqIEJpb21ldHJpYyBhdXRoZW50aWNhdGlvblxuICAgKi9cbiAgd2l0aEZpbmdlcnByaW50OiBib29sZWFuO1xuICAvKipcbiAgICogQXV0aGVudGljYXRpb24gdXNpbmcgYmFja3VwIGNyZWRlbnRpYWwgYWN0aXZpdHlcbiAgICovXG4gIHdpdGhCYWNrdXA6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBGaW5nZXJwcmludEF1dGguQ2lwaGVyTW9kZS5ERUNSWVBUXG4gICAqIERlY3J5cHRlZCBwYXNzd29yZFxuICAgKi9cbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBRkFFbmNyeXB0UmVzcG9uc2Uge1xuICAvKipcbiAgICogQmlvbWV0cmljIGF1dGhlbnRpY2F0aW9uXG4gICAqL1xuICB3aXRoRmluZ2VycHJpbnQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBdXRoZW50aWNhdGlvbiB1c2luZyBiYWNrdXAgY3JlZGVudGlhbCBhY3Rpdml0eVxuICAgKi9cbiAgd2l0aEJhY2t1cDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGJhc2U2NGVuY29kZWQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHVzZXIgY3JlZGVudGlhbHNcbiAgICovXG4gIHRva2VuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQUZBQXZhaWxhYmxlUmVzcG9uc2Uge1xuICBpc0F2YWlsYWJsZTogYm9vbGVhbjtcbiAgaXNIYXJkd2FyZURldGVjdGVkOiBib29sZWFuO1xuICBoYXNFbnJvbGxlZEZpbmdlcnByaW50czogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBRkFEZWxldGVPcHRpb25zIHtcbiAgY2xpZW50SWQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBbmRyb2lkIEZpbmdlcnByaW50IEF1dGhcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgbmF0aXZlIGRpYWxvZyBmcmFnbWVudCBwcm9tcHRpbmcgdGhlIHVzZXIgdG8gYXV0aGVudGljYXRlIHVzaW5nIHRoZWlyIGZpbmdlcnByaW50LiBJZiB0aGUgZGV2aWNlIGhhcyBhIHNlY3VyZSBsb2Nrc2NyZWVuIChwYXR0ZXJuLCBQSU4sIG9yIHBhc3N3b3JkKSwgdGhlIHVzZXIgbWF5IG9wdCB0byBhdXRoZW50aWNhdGUgdXNpbmcgdGhhdCBtZXRob2QgYXMgYSBiYWNrdXAuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFuZHJvaWRGaW5nZXJwcmludEF1dGggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FuZHJvaWQtZmluZ2VycHJpbnQtYXV0aC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5kcm9pZEZpbmdlcnByaW50QXV0aDogQW5kcm9pZEZpbmdlcnByaW50QXV0aCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYW5kcm9pZEZpbmdlcnByaW50QXV0aC5pc0F2YWlsYWJsZSgpXG4gKiAgIC50aGVuKChyZXN1bHQpPT4ge1xuICogICAgIGlmKHJlc3VsdC5pc0F2YWlsYWJsZSl7XG4gKiAgICAgICAvLyBpdCBpcyBhdmFpbGFibGVcbiAqXG4gKiAgICAgICB0aGlzLmFuZHJvaWRGaW5nZXJwcmludEF1dGguZW5jcnlwdCh7IGNsaWVudElkOiAnbXlBcHBOYW1lJywgdXNlcm5hbWU6ICdteVVzZXJuYW1lJywgcGFzc3dvcmQ6ICdteVBhc3N3b3JkJyB9KVxuICogICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICogICAgICAgICAgICBpZiAocmVzdWx0LndpdGhGaW5nZXJwcmludCkge1xuICogICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBlbmNyeXB0ZWQgY3JlZGVudGlhbHMuJyk7XG4gKiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW5jcnlwdGVkIGNyZWRlbnRpYWxzOiAnICsgcmVzdWx0LnRva2VuKTtcbiAqICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQud2l0aEJhY2t1cCkge1xuICogICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZCB3aXRoIGJhY2t1cCBwYXNzd29yZCEnKTtcbiAqICAgICAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKCdEaWRuXFwndCBhdXRoZW50aWNhdGUhJyk7XG4gKiAgICAgICAgIH0pXG4gKiAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gKiAgICAgICAgICAgIGlmIChlcnJvciA9PT0gdGhpcy5hbmRyb2lkRmluZ2VycHJpbnRBdXRoLkVSUk9SUy5GSU5HRVJQUklOVF9DQU5DRUxMRUQpIHtcbiAqICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmluZ2VycHJpbnQgYXV0aGVudGljYXRpb24gY2FuY2VsbGVkJyk7XG4gKiAgICAgICAgICAgIH0gZWxzZSBjb25zb2xlLmVycm9yKGVycm9yKVxuICogICAgICAgICB9KTtcbiAqXG4gKiAgICAgfSBlbHNlIHtcbiAqICAgICAgIC8vIGZpbmdlcnByaW50IGF1dGggaXNuJ3QgYXZhaWxhYmxlXG4gKiAgICAgfVxuICogICB9KVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQUZBQXV0aE9wdGlvbnNcbiAqIEFGQUVuY3J5cHRSZXNwb25zZVxuICogQUZBRGVjcnlwdE9wdGlvbnNcbiAqIEFGQUF2YWlsYWJsZVJlc3BvbnNlXG4gKiBBRkFEZWxldGVPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQW5kcm9pZEZpbmdlcnByaW50QXV0aCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFuZHJvaWQtZmluZ2VycHJpbnQtYXV0aCcsXG4gIHBsdWdpblJlZjogJ0ZpbmdlcnByaW50QXV0aCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWp3aGVhdGxleS9jb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLWZpbmdlcnByaW50LWF1dGgnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmRyb2lkRmluZ2VycHJpbnRBdXRoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgcHJvcGVydHkgY29udGFpbmluZyBhbGwgcG9zc2libGUgZXJyb3JzXG4gICAqL1xuICBFUlJPUlM6IHtcbiAgICBCQURfUEFERElOR19FWENFUFRJT046IHN0cmluZztcbiAgICBDRVJUSUZJQ0FURV9FWENFUFRJT046IHN0cmluZztcbiAgICBGSU5HRVJQUklOVF9DQU5DRUxMRUQ6IHN0cmluZztcbiAgICBGSU5HRVJQUklOVF9EQVRBX05PVF9ERUxFVEVEOiBzdHJpbmc7XG4gICAgRklOR0VSUFJJTlRfRVJST1I6IHN0cmluZztcbiAgICBGSU5HRVJQUklOVF9OT1RfQVZBSUxBQkxFOiBzdHJpbmc7XG4gICAgRklOR0VSUFJJTlRfUEVSTUlTU0lPTl9ERU5JRUQ6IHN0cmluZztcbiAgICBGSU5HRVJQUklOVF9QRVJNSVNTSU9OX0RFTklFRF9TSE9XX1JFUVVFU1Q6IHN0cmluZztcbiAgICBJTExFR0FMX0JMT0NLX1NJWkVfRVhDRVBUSU9OOiBzdHJpbmc7XG4gICAgSU5JVF9DSVBIRVJfRkFJTEVEOiBzdHJpbmc7XG4gICAgSU5WQUxJRF9BTEdPUklUSE1fUEFSQU1FVEVSX0VYQ0VQVElPTjogc3RyaW5nO1xuICAgIElPX0VYQ0VQVElPTjogc3RyaW5nO1xuICAgIEpTT05fRVhDRVBUSU9OOiBzdHJpbmc7XG4gICAgTUlOSU1VTV9TREs6IHN0cmluZztcbiAgICBNSVNTSU5HX0FDVElPTl9QQVJBTUVURVJTOiBzdHJpbmc7XG4gICAgTUlTU0lOR19QQVJBTUVURVJTOiBzdHJpbmc7XG4gICAgTk9fU1VDSF9BTEdPUklUSE1fRVhDRVBUSU9OOiBzdHJpbmc7XG4gICAgU0VDVVJJVFlfRVhDRVBUSU9OOiBzdHJpbmc7XG4gIH0gPSB7XG4gICAgQkFEX1BBRERJTkdfRVhDRVBUSU9OOiAnQkFEX1BBRERJTkdfRVhDRVBUSU9OJyxcbiAgICBDRVJUSUZJQ0FURV9FWENFUFRJT046ICdDRVJUSUZJQ0FURV9FWENFUFRJT04nLFxuICAgIEZJTkdFUlBSSU5UX0NBTkNFTExFRDogJ0ZJTkdFUlBSSU5UX0NBTkNFTExFRCcsXG4gICAgRklOR0VSUFJJTlRfREFUQV9OT1RfREVMRVRFRDogJ0ZJTkdFUlBSSU5UX0RBVEFfTk9UX0RFTEVURUQnLFxuICAgIEZJTkdFUlBSSU5UX0VSUk9SOiAnRklOR0VSUFJJTlRfRVJST1InLFxuICAgIEZJTkdFUlBSSU5UX05PVF9BVkFJTEFCTEU6ICdGSU5HRVJQUklOVF9OT1RfQVZBSUxBQkxFJyxcbiAgICBGSU5HRVJQUklOVF9QRVJNSVNTSU9OX0RFTklFRDogJ0ZJTkdFUlBSSU5UX1BFUk1JU1NJT05fREVOSUVEJyxcbiAgICBGSU5HRVJQUklOVF9QRVJNSVNTSU9OX0RFTklFRF9TSE9XX1JFUVVFU1Q6ICdGSU5HRVJQUklOVF9QRVJNSVNTSU9OX0RFTklFRF9TSE9XX1JFUVVFU1QnLFxuICAgIElMTEVHQUxfQkxPQ0tfU0laRV9FWENFUFRJT046ICdJTExFR0FMX0JMT0NLX1NJWkVfRVhDRVBUSU9OJyxcbiAgICBJTklUX0NJUEhFUl9GQUlMRUQ6ICdJTklUX0NJUEhFUl9GQUlMRUQnLFxuICAgIElOVkFMSURfQUxHT1JJVEhNX1BBUkFNRVRFUl9FWENFUFRJT046ICdJTlZBTElEX0FMR09SSVRITV9QQVJBTUVURVJfRVhDRVBUSU9OJyxcbiAgICBJT19FWENFUFRJT046ICdJT19FWENFUFRJT04nLFxuICAgIEpTT05fRVhDRVBUSU9OOiAnSlNPTl9FWENFUFRJT04nLFxuICAgIE1JTklNVU1fU0RLOiAnTUlOSU1VTV9TREsnLFxuICAgIE1JU1NJTkdfQUNUSU9OX1BBUkFNRVRFUlM6ICdNSVNTSU5HX0FDVElPTl9QQVJBTUVURVJTJyxcbiAgICBNSVNTSU5HX1BBUkFNRVRFUlM6ICdNSVNTSU5HX1BBUkFNRVRFUlMnLFxuICAgIE5PX1NVQ0hfQUxHT1JJVEhNX0VYQ0VQVElPTjogJ05PX1NVQ0hfQUxHT1JJVEhNX0VYQ0VQVElPTicsXG4gICAgU0VDVVJJVFlfRVhDRVBUSU9OOiAnU0VDVVJJVFlfRVhDRVBUSU9OJyxcbiAgfTtcblxuICAvKipcbiAgICogT3BlbnMgYSBuYXRpdmUgZGlhbG9nIGZyYWdtZW50IHRvIHVzZSB0aGUgZGV2aWNlIGhhcmR3YXJlIGZpbmdlcnByaW50IHNjYW5uZXIgdG8gYXV0aGVudGljYXRlIGFnYWluc3QgZmluZ2VycHJpbnRzIHJlZ2lzdGVyZWQgZm9yIHRoZSBkZXZpY2UuXG4gICAqIEBwYXJhbSB7QUZBQXV0aE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBRkFFbmNyeXB0UmVzcG9uc2U+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmNyeXB0KG9wdGlvbnM6IEFGQUF1dGhPcHRpb25zKTogUHJvbWlzZTxBRkFFbmNyeXB0UmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBuYXRpdmUgZGlhbG9nIGZyYWdtZW50IHRvIHVzZSB0aGUgZGV2aWNlIGhhcmR3YXJlIGZpbmdlcnByaW50IHNjYW5uZXIgdG8gYXV0aGVudGljYXRlIGFnYWluc3QgZmluZ2VycHJpbnRzIHJlZ2lzdGVyZWQgZm9yIHRoZSBkZXZpY2UuXG4gICAqIEBwYXJhbSB7QUZBQXV0aE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBRkFEZWNyeXB0T3B0aW9ucz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlY3J5cHQob3B0aW9uczogQUZBQXV0aE9wdGlvbnMpOiBQcm9taXNlPEFGQURlY3J5cHRPcHRpb25zPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHNlcnZpY2UgaXMgYXZhaWxhYmxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFGQUF2YWlsYWJsZVJlc3BvbnNlPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBpZiBmaW5nZXJwcmludCBhdXRoIGlzIGF2YWlsYWJsZSBvbiB0aGUgZGV2aWNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8QUZBQXZhaWxhYmxlUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBjaXBoZXIgdXNlZCBmb3IgZW5jcnlwdGlvbiBhbmQgZGVjcnlwdGlvbiBieSB1c2VybmFtZVxuICAgKiBAcGFyYW0ge0FGQURlbGV0ZU9wdGlvbnN9IG9wdGlvbnMgT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGRlbGV0ZWQ6IGJvb2xlYW4gfT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGNpcGhlciB3YXMgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlKG9wdGlvbnM6IEFGQURlbGV0ZU9wdGlvbnMpOiBQcm9taXNlPHsgZGVsZXRlZDogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=