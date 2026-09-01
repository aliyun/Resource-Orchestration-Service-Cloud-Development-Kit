"use strict";
/**
 * According to https://help.aliyun.com/oss/user-guide/common-examples-of-bucket-policy
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUCKET_LIST_ACTIONS = exports.BUCKET_READ_WRITE_ACTIONS = exports.BUCKET_READ_ACTIONS = void 0;
exports.BUCKET_READ_ACTIONS = [
    'oss:GetObject',
    'oss:GetObjectAcl',
    'oss:GetObjectVersion',
    'oss:GetObjectVersionAcl',
];
exports.BUCKET_READ_WRITE_ACTIONS = [
    'oss:GetObject',
    'oss:PutObject',
    'oss:GetObjectAcl',
    'oss:PutObjectAcl',
    'oss:AbortMultipartUpload',
    'oss:ListParts',
    'oss:RestoreObject',
    'oss:GetVodPlaylist',
    'oss:PostVodPlaylist',
    'oss:PublishRtmpStream',
    'oss:ListObjectVersions',
    'oss:GetObjectVersion',
    'oss:GetObjectVersionAcl',
    'oss:RestoreObjectVersion',
];
exports.BUCKET_LIST_ACTIONS = [
    'oss:ListObjects',
    'oss:ListObjectVersions',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybXMuY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVybXMuY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7O0FBRVUsUUFBQSxtQkFBbUIsR0FBRztJQUMvQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7Q0FDNUIsQ0FBQTtBQUVZLFFBQUEseUJBQXlCLEdBQUc7SUFDckMsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtDQUM3QixDQUFBO0FBRVksUUFBQSxtQkFBbUIsR0FBRztJQUMvQixpQkFBaUI7SUFDakIsd0JBQXdCO0NBQzNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFjY29yZGluZyB0byBodHRwczovL2hlbHAuYWxpeXVuLmNvbS9vc3MvdXNlci1ndWlkZS9jb21tb24tZXhhbXBsZXMtb2YtYnVja2V0LXBvbGljeVxuICovXG5cbmV4cG9ydCBjb25zdCBCVUNLRVRfUkVBRF9BQ1RJT05TID0gW1xuICAgICdvc3M6R2V0T2JqZWN0JyxcbiAgICAnb3NzOkdldE9iamVjdEFjbCcsXG4gICAgJ29zczpHZXRPYmplY3RWZXJzaW9uJyxcbiAgICAnb3NzOkdldE9iamVjdFZlcnNpb25BY2wnLFxuXVxuXG5leHBvcnQgY29uc3QgQlVDS0VUX1JFQURfV1JJVEVfQUNUSU9OUyA9IFtcbiAgICAnb3NzOkdldE9iamVjdCcsXG4gICAgJ29zczpQdXRPYmplY3QnLFxuICAgICdvc3M6R2V0T2JqZWN0QWNsJyxcbiAgICAnb3NzOlB1dE9iamVjdEFjbCcsXG4gICAgJ29zczpBYm9ydE11bHRpcGFydFVwbG9hZCcsXG4gICAgJ29zczpMaXN0UGFydHMnLFxuICAgICdvc3M6UmVzdG9yZU9iamVjdCcsXG4gICAgJ29zczpHZXRWb2RQbGF5bGlzdCcsXG4gICAgJ29zczpQb3N0Vm9kUGxheWxpc3QnLFxuICAgICdvc3M6UHVibGlzaFJ0bXBTdHJlYW0nLFxuICAgICdvc3M6TGlzdE9iamVjdFZlcnNpb25zJyxcbiAgICAnb3NzOkdldE9iamVjdFZlcnNpb24nLFxuICAgICdvc3M6R2V0T2JqZWN0VmVyc2lvbkFjbCcsXG4gICAgJ29zczpSZXN0b3JlT2JqZWN0VmVyc2lvbicsXG5dXG5cbmV4cG9ydCBjb25zdCBCVUNLRVRfTElTVF9BQ1RJT05TID0gW1xuICAgICdvc3M6TGlzdE9iamVjdHMnLFxuICAgICdvc3M6TGlzdE9iamVjdFZlcnNpb25zJyxcbl0iXX0=