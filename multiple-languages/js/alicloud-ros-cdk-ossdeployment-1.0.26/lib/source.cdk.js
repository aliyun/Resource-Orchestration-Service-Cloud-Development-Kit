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
     * @param options Options for the Asset.
     * @param objectPrefix The prefix of object key. You can use it to specify the location of the object in the target bucket.
     */
    static asset(path, options, objectPrefix) {
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
                        fileName: objectPrefix ? objectPrefix + path_1.basename(path) : path_1.basename(path)
                    };
                }
                else {
                    return {
                        bucket: asset.bucketName,
                        objectKey: asset.objectKey,
                        fileName: objectPrefix ? objectPrefix + path_1.basename(path) + '.zip' : path_1.basename(path) + '.zip'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNkay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvdXJjZS5jZGsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBRTlDLG1FQUFrRTtBQUNsRSwrQkFBK0M7QUFDL0MseUJBQXlCO0FBa0N6Qjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQWEsTUFBTTtJQUNqQjs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUF5QyxFQUFFLFNBQW1DO1FBQ2pHLE9BQU87WUFDTCxJQUFJLEVBQUUsQ0FBQyxDQUFnQixFQUFFLEVBQUU7Z0JBQ3pCLElBQUksR0FBRyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtvQkFDaEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQztpQkFDOUI7cUJBQU07b0JBQ0wsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUMvQztZQUNILENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBWSxFQUFFLE9BQXNCLEVBQUUsWUFBcUI7UUFDN0UsT0FBTztZQUNMLElBQUksQ0FBQyxLQUFvQjtnQkFDdkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNYLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUM1QyxFQUFFLEVBQUUsQ0FBQztpQkFDTjtnQkFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7b0JBQzNDLElBQUk7b0JBQ0osR0FBRyxPQUFPO2lCQUNYLENBQUMsQ0FBQztnQkFDSCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2hCLE9BQU87d0JBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVO3dCQUN4QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7d0JBQzFCLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxlQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQVEsQ0FBQyxJQUFJLENBQUM7cUJBQ3hFLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTzt3QkFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVU7d0JBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUzt3QkFDMUIsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLGVBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNO3FCQUMxRixDQUFDO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQWlCLEVBQUUsSUFBWTtRQUNoRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLENBQUMsS0FBb0IsRUFBRSxFQUFFO2dCQUM3QixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLFVBQVUsR0FBRyxXQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QyxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pELE9BQU87b0JBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO29CQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7b0JBQzFCLFFBQVEsRUFBRSxTQUFTO2lCQUNwQixDQUFDO1lBQ0osQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFpQixFQUFFLEdBQVE7UUFDaEQsT0FBTztZQUNMLElBQUksRUFBRSxDQUFDLEtBQW9CLEVBQUUsRUFBRTtnQkFDN0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pFLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBdEdELHdCQXNHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IEJ1Y2tldCB9IGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLW9zcyc7XG5pbXBvcnQgeyBBc3NldCwgQXNzZXRPcHRpb25zIH0gZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstb3NzYXNzZXRzJztcbmltcG9ydCB7IGpvaW4sIGRpcm5hbWUsIGJhc2VuYW1lIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbi8qKlxuICogU291cmNlIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNvdXJjZUNvbmZpZyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiBzb3VyY2UgYnVja2V0IHRvIGRlcGxveSBmcm9tLlxuICAgKi9cbiAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICAqIEFuIG9iamVjdCBrZXkgaW4gdGhlIHNvdXJjZSBidWNrZXQgdG8gZGVwbG95IGZyb20uXG4gICAqL1xuICByZWFkb25seSBvYmplY3RLZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2Ygc291cmNlIGxvY2FsIGZpbGUgdG8gZGVwbG95IGZyb20uXG4gICAqL1xuICByZWFkb25seSBmaWxlTmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSBzb3VyY2UgZm9yIGJ1Y2tldCBkZXBsb3ltZW50cy5cbiovXG5leHBvcnQgaW50ZXJmYWNlIElTb3VyY2Uge1xuICAvKipcbiAgICogQmluZHMgdGhlIHNvdXJjZSB0byBhIGJ1Y2tldCBkZXBsb3ltZW50LlxuICAgKiBAcGFyYW0gc2NvcGUgVGhlIGNvbnN0cnVjdCB0cmVlIGNvbnRleHQuXG4gICAqL1xuICBiaW5kKHNjb3BlOiByb3MuQ29uc3RydWN0KTogU291cmNlQ29uZmlnO1xufVxuXG5cbi8qKlxuICogU3BlY2lmaWVzIGJ1Y2tldCBkZXBsb3ltZW50IHNvdXJjZS5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgICAgU291cmNlLmJ1Y2tldChidWNrZXROYW1lLCBvYmplY3RLZXkpXG4gKiAgICAgU291cmNlLmFzc2V0KCcvbG9jYWwvcGF0aC90by9kaXJlY3RvcnknKVxuICogICAgIFNvdXJjZS5hc3NldCgnL2xvY2FsL3BhdGgvdG8vYS9maWxlLnppcCcpXG4gKiAgICAgU291cmNlLmRhdGEoJ2hlbGxvL3dvcmxkL2ZpbGUudHh0JywgJ0hlbGxvLCB3b3JsZCEnKVxuICogICAgIFNvdXJjZS5qc29uRGF0YSgnY29uZmlnLmpzb24nLCB7IGtleTogdmFsdWUgfSlcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTb3VyY2Uge1xuICAvKipcbiAgICogVXNlcyBhIGZpbGUgc3RvcmVkIGluIGFuIE9TUyBidWNrZXQgYXMgdGhlIHNvdXJjZSBmb3IgdGhlIGRlc3RpbmF0aW9uIGJ1Y2tldCBjb250ZW50cy5cbiAgICpcbiAgICogTWFrZSBzdXJlIHlvdSB0cnVzdCB0aGUgcHJvZHVjZXIgb2YgdGhlIGFyY2hpdmUuIFRoZSBzb3VyY2UgYnVja2V0IGFuZCB0aGUgZGVzdGluYXRpb24gYnVja2V0IG11c3QgYmUgaW4gdGhlIHNhbWUgcmVnaW9uLlxuICAgKlxuICAgKiBAcGFyYW0gYnVja2V0IFRoZSBPU1MgQnVja2V0XG4gICAqIEBwYXJhbSBvYmplY3RLZXkgVGhlIHBhdGggb2ZcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYnVja2V0KGJ1Y2tldDogQnVja2V0IHwgc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlLCBvYmplY3RLZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSk6IElTb3VyY2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kOiAoXzogcm9zLkNvbnN0cnVjdCkgPT4ge1xuICAgICAgICBpZiAocm9zLmlzUmVzb2x2YWJsZU9iamVjdChidWNrZXQpIHx8IHR5cGVvZiBidWNrZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHsgYnVja2V0LCBvYmplY3RLZXkgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4geyBidWNrZXQ6IGJ1Y2tldC5hdHRyTmFtZSwgb2JqZWN0S2V5IH07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VzIGEgbG9jYWwgZmlsZSBwYXRoIGFzIHRoZSBzb3VyY2Ugb2YgdGhlIHRhcmdldCBidWNrZXQgY29udGVudHMuXG4gICAqXG4gICAqIFJPUyBDREsgd2lsbCBjcmVhdGUgYSB0ZW1wb3JhcnkgYnVja2V0IGFuZCB1cGxvYWQgdGhlIGZpbGVzIHlvdSB3YW50IHRvIHVwbG9hZCB0byBpdC5cbiAgICogTWFrZSBzdXJlIHRoYXQgdGhlIHJlZ2lvbiBpZCB5b3Ugc3BlY2lmeSBpbiBzeW50aCBhbmQgZGVwbG95IGlzIHRoZSBzYW1lIHJlZ2lvbiBpZCBhcyB0aGUgZGVzdGluYXRpb24gdXBsb2FkIGJ1Y2tldC5cbiAgICpcbiAgICogSWYgdGhlIGxvY2FsIGFzc2V0IGlzIGEgLnppcCBhcmNoaXZlLCBtYWtlIHN1cmUgeW91IHRydXN0IHRoZVxuICAgKiBwcm9kdWNlciBvZiB0aGUgYXJjaGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggdG8gYSBsb2NhbCBmaWxlIG9yIGEgZGlyZWN0b3J5LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciB0aGUgQXNzZXQuXG4gICAqIEBwYXJhbSBvYmplY3RQcmVmaXggVGhlIHByZWZpeCBvZiBvYmplY3Qga2V5LiBZb3UgY2FuIHVzZSBpdCB0byBzcGVjaWZ5IHRoZSBsb2NhdGlvbiBvZiB0aGUgb2JqZWN0IGluIHRoZSB0YXJnZXQgYnVja2V0LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3NldChwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiBBc3NldE9wdGlvbnMsIG9iamVjdFByZWZpeD86IHN0cmluZyk6IElTb3VyY2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kKHNjb3BlOiByb3MuQ29uc3RydWN0KTogU291cmNlQ29uZmlnIHtcbiAgICAgICAgbGV0IGlkID0gMTtcbiAgICAgICAgd2hpbGUgKHNjb3BlLm5vZGUudHJ5RmluZENoaWxkKGBBc3NldCR7aWR9YCkpIHtcbiAgICAgICAgICBpZCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gbmV3IEFzc2V0KHNjb3BlLCBgQXNzZXQke2lkfWAsIHtcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYXNzZXQuaXNGaWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1Y2tldDogYXNzZXQuYnVja2V0TmFtZSxcbiAgICAgICAgICAgIG9iamVjdEtleTogYXNzZXQub2JqZWN0S2V5LFxuICAgICAgICAgICAgZmlsZU5hbWU6IG9iamVjdFByZWZpeCA/IG9iamVjdFByZWZpeCArIGJhc2VuYW1lKHBhdGgpIDogYmFzZW5hbWUocGF0aClcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidWNrZXQ6IGFzc2V0LmJ1Y2tldE5hbWUsXG4gICAgICAgICAgICBvYmplY3RLZXk6IGFzc2V0Lm9iamVjdEtleSxcbiAgICAgICAgICAgIGZpbGVOYW1lOiBvYmplY3RQcmVmaXggPyBvYmplY3RQcmVmaXggKyBiYXNlbmFtZShwYXRoKSArICcuemlwJyA6IGJhc2VuYW1lKHBhdGgpICsgJy56aXAnXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXBsb3lzIGFuIG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQgc3RyaW5nIGNvbnRlbnRzIGludG8gdGhlIGJ1Y2tldC5cbiAgICpcbiAgICogVG8gc3RvcmUgYSBKU09OIG9iamVjdCB1c2UgYFNvdXJjZS5qc29uRGF0YSgpYC5cbiAgICpcbiAgICogQHBhcmFtIG9iamVjdEtleSBUaGUgZGVzdGluYXRpb24gT1NTIG9iamVjdCBrZXkgKHJlbGF0aXZlIHRvIHRoZSByb290IG9mIHRoZVxuICAgKiBPU1MgZGVwbG95bWVudCkuXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGJlIHN0b3JlZCBpbiB0aGUgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBkYXRhKG9iamVjdEtleTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiBJU291cmNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmluZDogKHNjb3BlOiByb3MuQ29uc3RydWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHdvcmtkaXIgPSByb3MuRmlsZVN5c3RlbS5ta2R0ZW1wKCdvc3MtZGVwbG95bWVudCcpO1xuICAgICAgICBjb25zdCBvdXRwdXRQYXRoID0gam9pbih3b3JrZGlyLCBvYmplY3RLZXkpO1xuICAgICAgICBmcy5ta2RpclN5bmMoZGlybmFtZShvdXRwdXRQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMob3V0cHV0UGF0aCwgZGF0YSk7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gdGhpcy5hc3NldChvdXRwdXRQYXRoKS5iaW5kKHNjb3BlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBidWNrZXQ6IGFzc2V0LmJ1Y2tldCxcbiAgICAgICAgICBvYmplY3RLZXk6IGFzc2V0Lm9iamVjdEtleSxcbiAgICAgICAgICBmaWxlTmFtZTogb2JqZWN0S2V5XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXBsb3lzIGFuIG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQgSlNPTiBvYmplY3QgaW50byB0aGUgYnVja2V0LlxuICAgKlxuICAgKiBAcGFyYW0gb2JqZWN0S2V5IFRoZSBkZXN0aW5hdGlvbiBPU1Mgb2JqZWN0IGtleSAocmVsYXRpdmUgdG8gdGhlIHJvb3Qgb2YgdGhlXG4gICAqIE9TUyBkZXBsb3ltZW50KS5cbiAgICogQHBhcmFtIG9iaiBBIEpTT04gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBqc29uRGF0YShvYmplY3RLZXk6IHN0cmluZywgb2JqOiBhbnkpOiBJU291cmNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmluZDogKHNjb3BlOiByb3MuQ29uc3RydWN0KSA9PiB7XG4gICAgICAgIHJldHVybiBTb3VyY2UuZGF0YShvYmplY3RLZXksIEpTT04uc3RyaW5naWZ5KG9iaikpLmJpbmQoc2NvcGUpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG59Il19