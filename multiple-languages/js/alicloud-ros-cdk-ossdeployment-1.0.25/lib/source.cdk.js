"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_cdk_ossassets_1 = require("@alicloud/ros-cdk-ossassets");
const path_1 = require("path");
const fs = require("fs");
/**
 * Specifies bucket deployment source.
 *
 * Usage:
 *
 *     Source.bucket(bucketName, objectKey)
 *     Source.asset('/local/path/to/directory')
 *     Source.asset('/local/path/to/a/file.zip')
 *     Source.data('hello/world/file.txt', 'Hello, world!')
 *     Source.jsonData('config.json', { key: value })
 *
 */
class Source {
    /**
     * Uses a file stored in an OSS bucket as the source for the destination bucket contents.
     *
     * Make sure you trust the producer of the archive. The source bucket and the destination bucket must be in the same region.
     *
     * @param bucket The OSS Bucket
     * @param objectKey The path of
     */
    static bucket(bucket, objectKey) {
        return {
            bind: (_) => {
                if (ros.isResolvableObject(bucket) || typeof bucket === 'string') {
                    return { bucket, objectKey };
                }
                else {
                    return { bucket: bucket.attrName, objectKey };
                }
            },
        };
    }
    /**
     * Uses a local file path as the source of the target bucket contents.
     *
     * ROS CDK will create a temporary bucket and upload the files you want to upload to it.
     * Make sure that the region id you specify in synth and deploy is the same region id as the destination upload bucket.
     *
     * If the local asset is a .zip archive, make sure you trust the
     * producer of the archive.
     *
     * @param path The path to a local file or a directory.
     * @param options Options for the Asset
     */
    static asset(path, options) {
        return {
            bind(scope) {
                let id = 1;
                while (scope.node.tryFindChild(`Asset${id}`)) {
                    id++;
                }
                const asset = new ros_cdk_ossassets_1.Asset(scope, `Asset${id}`, {
                    path,
                    ...options,
                });
                if (asset.isFile) {
                    return {
                        bucket: asset.bucketName,
                        objectKey: asset.objectKey,
                        fileName: path_1.basename(path)
                    };
                }
                else {
                    return {
                        bucket: asset.bucketName,
                        objectKey: asset.objectKey,
                        fileName: path_1.basename(path) + '.zip'
                    };
                }
            }
        };
    }
    /**
     * Deploys an object with the specified string contents into the bucket.
     *
     * To store a JSON object use `Source.jsonData()`.
     *
     * @param objectKey The destination OSS object key (relative to the root of the
     * OSS deployment).
     * @param data The data to be stored in the object.
     */
    static data(objectKey, data) {
        return {
            bind: (scope) => {
                const workdir = ros.FileSystem.mkdtemp('oss-deployment');
                const outputPath = path_1.join(workdir, objectKey);
                fs.mkdirSync(path_1.dirname(outputPath), { recursive: true });
                fs.writeFileSync(outputPath, data);
                const asset = this.asset(outputPath).bind(scope);
                return {
                    bucket: asset.bucket,
                    objectKey: asset.objectKey,
                    fileName: objectKey
                };
            },
        };
    }
    /**
     * Deploys an object with the specified JSON object into the bucket.
     *
     * @param objectKey The destination OSS object key (relative to the root of the
     * OSS deployment).
     * @param obj A JSON object.
     */
    static jsonData(objectKey, obj) {
        return {
            bind: (scope) => {
                return Source.data(objectKey, JSON.stringify(obj)).bind(scope);
            },
        };
    }
}
exports.Source = Source;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNkay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvdXJjZS5jZGsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBRTlDLG1FQUFrRTtBQUNsRSwrQkFBK0M7QUFDL0MseUJBQXlCO0FBa0N6Qjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQWEsTUFBTTtJQUNqQjs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUF5QyxFQUFFLFNBQW1DO1FBQ2pHLE9BQU87WUFDTCxJQUFJLEVBQUUsQ0FBQyxDQUFnQixFQUFFLEVBQUU7Z0JBQ3pCLElBQUksR0FBRyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtvQkFDaEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQztpQkFDOUI7cUJBQU07b0JBQ0wsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUMvQztZQUNILENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFZLEVBQUUsT0FBc0I7UUFDdEQsT0FBTztZQUNMLElBQUksQ0FBQyxLQUFvQjtnQkFDdkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNYLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUM1QyxFQUFFLEVBQUUsQ0FBQztpQkFDTjtnQkFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7b0JBQzNDLElBQUk7b0JBQ0osR0FBRyxPQUFPO2lCQUNYLENBQUMsQ0FBQztnQkFDSCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2hCLE9BQU87d0JBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVO3dCQUN4QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7d0JBQzFCLFFBQVEsRUFBRSxlQUFRLENBQUMsSUFBSSxDQUFDO3FCQUN6QixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLE9BQU87d0JBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVO3dCQUN4QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7d0JBQzFCLFFBQVEsRUFBRSxlQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTTtxQkFDbEMsQ0FBQztpQkFDSDtZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFpQixFQUFFLElBQVk7UUFDaEQsT0FBTztZQUNMLElBQUksRUFBRSxDQUFDLEtBQW9CLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDekQsTUFBTSxVQUFVLEdBQUcsV0FBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDNUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdkQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxPQUFPO29CQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtvQkFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO29CQUMxQixRQUFRLEVBQUUsU0FBUztpQkFDcEIsQ0FBQztZQUNKLENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBaUIsRUFBRSxHQUFRO1FBQ2hELE9BQU87WUFDTCxJQUFJLEVBQUUsQ0FBQyxLQUFvQixFQUFFLEVBQUU7Z0JBQzdCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRSxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXJHRCx3QkFxR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBCdWNrZXQgfSBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1vc3MnO1xuaW1wb3J0IHsgQXNzZXQsIEFzc2V0T3B0aW9ucyB9IGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLW9zc2Fzc2V0cyc7XG5pbXBvcnQgeyBqb2luLCBkaXJuYW1lLCBiYXNlbmFtZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG4vKipcbiAqIFNvdXJjZSBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTb3VyY2VDb25maWcge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2Ygc291cmNlIGJ1Y2tldCB0byBkZXBsb3kgZnJvbS5cbiAgICovXG4gIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAgKiBBbiBvYmplY3Qga2V5IGluIHRoZSBzb3VyY2UgYnVja2V0IHRvIGRlcGxveSBmcm9tLlxuICAgKi9cbiAgcmVhZG9ubHkgb2JqZWN0S2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHNvdXJjZSBsb2NhbCBmaWxlIHRvIGRlcGxveSBmcm9tLlxuICAgKi9cbiAgcmVhZG9ubHkgZmlsZU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEgc291cmNlIGZvciBidWNrZXQgZGVwbG95bWVudHMuXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJU291cmNlIHtcbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBzb3VyY2UgdG8gYSBidWNrZXQgZGVwbG95bWVudC5cbiAgICogQHBhcmFtIHNjb3BlIFRoZSBjb25zdHJ1Y3QgdHJlZSBjb250ZXh0LlxuICAgKi9cbiAgYmluZChzY29wZTogcm9zLkNvbnN0cnVjdCk6IFNvdXJjZUNvbmZpZztcbn1cblxuXG4vKipcbiAqIFNwZWNpZmllcyBidWNrZXQgZGVwbG95bWVudCBzb3VyY2UuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAgIFNvdXJjZS5idWNrZXQoYnVja2V0TmFtZSwgb2JqZWN0S2V5KVxuICogICAgIFNvdXJjZS5hc3NldCgnL2xvY2FsL3BhdGgvdG8vZGlyZWN0b3J5JylcbiAqICAgICBTb3VyY2UuYXNzZXQoJy9sb2NhbC9wYXRoL3RvL2EvZmlsZS56aXAnKVxuICogICAgIFNvdXJjZS5kYXRhKCdoZWxsby93b3JsZC9maWxlLnR4dCcsICdIZWxsbywgd29ybGQhJylcbiAqICAgICBTb3VyY2UuanNvbkRhdGEoJ2NvbmZpZy5qc29uJywgeyBrZXk6IHZhbHVlIH0pXG4gKlxuICovXG5leHBvcnQgY2xhc3MgU291cmNlIHtcbiAgLyoqXG4gICAqIFVzZXMgYSBmaWxlIHN0b3JlZCBpbiBhbiBPU1MgYnVja2V0IGFzIHRoZSBzb3VyY2UgZm9yIHRoZSBkZXN0aW5hdGlvbiBidWNrZXQgY29udGVudHMuXG4gICAqXG4gICAqIE1ha2Ugc3VyZSB5b3UgdHJ1c3QgdGhlIHByb2R1Y2VyIG9mIHRoZSBhcmNoaXZlLiBUaGUgc291cmNlIGJ1Y2tldCBhbmQgdGhlIGRlc3RpbmF0aW9uIGJ1Y2tldCBtdXN0IGJlIGluIHRoZSBzYW1lIHJlZ2lvbi5cbiAgICpcbiAgICogQHBhcmFtIGJ1Y2tldCBUaGUgT1NTIEJ1Y2tldFxuICAgKiBAcGFyYW0gb2JqZWN0S2V5IFRoZSBwYXRoIG9mXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGJ1Y2tldChidWNrZXQ6IEJ1Y2tldCB8IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSwgb2JqZWN0S2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUpOiBJU291cmNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmluZDogKF86IHJvcy5Db25zdHJ1Y3QpID0+IHtcbiAgICAgICAgaWYgKHJvcy5pc1Jlc29sdmFibGVPYmplY3QoYnVja2V0KSB8fCB0eXBlb2YgYnVja2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB7IGJ1Y2tldCwgb2JqZWN0S2V5IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgYnVja2V0OiBidWNrZXQuYXR0ck5hbWUsIG9iamVjdEtleSB9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVXNlcyBhIGxvY2FsIGZpbGUgcGF0aCBhcyB0aGUgc291cmNlIG9mIHRoZSB0YXJnZXQgYnVja2V0IGNvbnRlbnRzLlxuICAgKlxuICAgKiBST1MgQ0RLIHdpbGwgY3JlYXRlIGEgdGVtcG9yYXJ5IGJ1Y2tldCBhbmQgdXBsb2FkIHRoZSBmaWxlcyB5b3Ugd2FudCB0byB1cGxvYWQgdG8gaXQuXG4gICAqIE1ha2Ugc3VyZSB0aGF0IHRoZSByZWdpb24gaWQgeW91IHNwZWNpZnkgaW4gc3ludGggYW5kIGRlcGxveSBpcyB0aGUgc2FtZSByZWdpb24gaWQgYXMgdGhlIGRlc3RpbmF0aW9uIHVwbG9hZCBidWNrZXQuXG4gICAqXG4gICAqIElmIHRoZSBsb2NhbCBhc3NldCBpcyBhIC56aXAgYXJjaGl2ZSwgbWFrZSBzdXJlIHlvdSB0cnVzdCB0aGVcbiAgICogcHJvZHVjZXIgb2YgdGhlIGFyY2hpdmUuXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIFRoZSBwYXRoIHRvIGEgbG9jYWwgZmlsZSBvciBhIGRpcmVjdG9yeS5cbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIEFzc2V0XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzc2V0KHBhdGg6IHN0cmluZywgb3B0aW9ucz86IEFzc2V0T3B0aW9ucyk6IElTb3VyY2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kKHNjb3BlOiByb3MuQ29uc3RydWN0KTogU291cmNlQ29uZmlnIHtcbiAgICAgICAgbGV0IGlkID0gMTtcbiAgICAgICAgd2hpbGUgKHNjb3BlLm5vZGUudHJ5RmluZENoaWxkKGBBc3NldCR7aWR9YCkpIHtcbiAgICAgICAgICBpZCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gbmV3IEFzc2V0KHNjb3BlLCBgQXNzZXQke2lkfWAsIHtcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYXNzZXQuaXNGaWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1Y2tldDogYXNzZXQuYnVja2V0TmFtZSxcbiAgICAgICAgICAgIG9iamVjdEtleTogYXNzZXQub2JqZWN0S2V5LFxuICAgICAgICAgICAgZmlsZU5hbWU6IGJhc2VuYW1lKHBhdGgpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVja2V0OiBhc3NldC5idWNrZXROYW1lLFxuICAgICAgICAgICAgb2JqZWN0S2V5OiBhc3NldC5vYmplY3RLZXksXG4gICAgICAgICAgICBmaWxlTmFtZTogYmFzZW5hbWUocGF0aCkgKyAnLnppcCdcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlcGxveXMgYW4gb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBzdHJpbmcgY29udGVudHMgaW50byB0aGUgYnVja2V0LlxuICAgKlxuICAgKiBUbyBzdG9yZSBhIEpTT04gb2JqZWN0IHVzZSBgU291cmNlLmpzb25EYXRhKClgLlxuICAgKlxuICAgKiBAcGFyYW0gb2JqZWN0S2V5IFRoZSBkZXN0aW5hdGlvbiBPU1Mgb2JqZWN0IGtleSAocmVsYXRpdmUgdG8gdGhlIHJvb3Qgb2YgdGhlXG4gICAqIE9TUyBkZXBsb3ltZW50KS5cbiAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gYmUgc3RvcmVkIGluIHRoZSBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGRhdGEob2JqZWN0S2V5OiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IElTb3VyY2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kOiAoc2NvcGU6IHJvcy5Db25zdHJ1Y3QpID0+IHtcbiAgICAgICAgY29uc3Qgd29ya2RpciA9IHJvcy5GaWxlU3lzdGVtLm1rZHRlbXAoJ29zcy1kZXBsb3ltZW50Jyk7XG4gICAgICAgIGNvbnN0IG91dHB1dFBhdGggPSBqb2luKHdvcmtkaXIsIG9iamVjdEtleSk7XG4gICAgICAgIGZzLm1rZGlyU3luYyhkaXJuYW1lKG91dHB1dFBhdGgpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRQYXRoLCBkYXRhKTtcbiAgICAgICAgY29uc3QgYXNzZXQgPSB0aGlzLmFzc2V0KG91dHB1dFBhdGgpLmJpbmQoc2NvcGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJ1Y2tldDogYXNzZXQuYnVja2V0LFxuICAgICAgICAgIG9iamVjdEtleTogYXNzZXQub2JqZWN0S2V5LFxuICAgICAgICAgIGZpbGVOYW1lOiBvYmplY3RLZXlcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlcGxveXMgYW4gb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBKU09OIG9iamVjdCBpbnRvIHRoZSBidWNrZXQuXG4gICAqXG4gICAqIEBwYXJhbSBvYmplY3RLZXkgVGhlIGRlc3RpbmF0aW9uIE9TUyBvYmplY3Qga2V5IChyZWxhdGl2ZSB0byB0aGUgcm9vdCBvZiB0aGVcbiAgICogT1NTIGRlcGxveW1lbnQpLlxuICAgKiBAcGFyYW0gb2JqIEEgSlNPTiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGpzb25EYXRhKG9iamVjdEtleTogc3RyaW5nLCBvYmo6IGFueSk6IElTb3VyY2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kOiAoc2NvcGU6IHJvcy5Db25zdHJ1Y3QpID0+IHtcbiAgICAgICAgcmV0dXJuIFNvdXJjZS5kYXRhKG9iamVjdEtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSkuYmluZChzY29wZSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbn0iXX0=