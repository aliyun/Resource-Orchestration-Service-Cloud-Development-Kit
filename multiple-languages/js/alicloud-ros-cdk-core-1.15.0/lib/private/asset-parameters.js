"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAssetParameters = void 0;
const construct_compat_1 = require("../construct-compat");
const ros_parameter_1 = require("../ros-parameter");
class FileAssetParameters extends construct_compat_1.Construct {
    constructor(scope, id) {
        super(scope, id);
        // add parameters for OSS bucket and object key. those will be set by
        // the toolkit or by CI/CD when the stack is deployed and will include
        // the name of the bucket and the object key where the code lives.
        this.bucketNameParameter = new ros_parameter_1.RosParameter(this, 'OSSBucket', {
            type: ros_parameter_1.RosParameterType.STRING,
            description: `OSS bucket for asset "${id}"`,
        });
        this.objectKeyParameter = new ros_parameter_1.RosParameter(this, 'OSSObjectKey', {
            type: ros_parameter_1.RosParameterType.STRING,
            description: `OSS object key for asset "${id}"`,
        });
        this.artifactHashParameter = new ros_parameter_1.RosParameter(this, 'ArtifactHash', {
            type: ros_parameter_1.RosParameterType.STRING,
            description: `Artifact hash for asset "${id}"`,
        });
    }
}
exports.FileAssetParameters = FileAssetParameters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQtcGFyYW1ldGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFzc2V0LXBhcmFtZXRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMERBQWdEO0FBQ2hELG9EQUFnRTtBQUVoRSxNQUFhLG1CQUFvQixTQUFRLDRCQUFTO0lBS2hELFlBQVksS0FBZ0IsRUFBRSxFQUFVO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIscUVBQXFFO1FBQ3JFLHNFQUFzRTtRQUN0RSxrRUFBa0U7UUFFbEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzdELElBQUksRUFBRSxnQ0FBZ0IsQ0FBQyxNQUFNO1lBQzdCLFdBQVcsRUFBRSx5QkFBeUIsRUFBRSxHQUFHO1NBQzVDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUMvRCxJQUFJLEVBQUUsZ0NBQWdCLENBQUMsTUFBTTtZQUM3QixXQUFXLEVBQUUsNkJBQTZCLEVBQUUsR0FBRztTQUNoRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSw0QkFBWSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDbEUsSUFBSSxFQUFFLGdDQUFnQixDQUFDLE1BQU07WUFDN0IsV0FBVyxFQUFFLDRCQUE0QixFQUFFLEdBQUc7U0FDL0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBM0JELGtEQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCIuLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQge1Jvc1BhcmFtZXRlciwgUm9zUGFyYW1ldGVyVHlwZX0gZnJvbSAnLi4vcm9zLXBhcmFtZXRlcic7XG5cbmV4cG9ydCBjbGFzcyBGaWxlQXNzZXRQYXJhbWV0ZXJzIGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgcHVibGljIHJlYWRvbmx5IGJ1Y2tldE5hbWVQYXJhbWV0ZXI6IFJvc1BhcmFtZXRlcjtcbiAgcHVibGljIHJlYWRvbmx5IG9iamVjdEtleVBhcmFtZXRlcjogUm9zUGFyYW1ldGVyO1xuICBwdWJsaWMgcmVhZG9ubHkgYXJ0aWZhY3RIYXNoUGFyYW1ldGVyOiBSb3NQYXJhbWV0ZXI7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAvLyBhZGQgcGFyYW1ldGVycyBmb3IgT1NTIGJ1Y2tldCBhbmQgb2JqZWN0IGtleS4gdGhvc2Ugd2lsbCBiZSBzZXQgYnlcbiAgICAvLyB0aGUgdG9vbGtpdCBvciBieSBDSS9DRCB3aGVuIHRoZSBzdGFjayBpcyBkZXBsb3llZCBhbmQgd2lsbCBpbmNsdWRlXG4gICAgLy8gdGhlIG5hbWUgb2YgdGhlIGJ1Y2tldCBhbmQgdGhlIG9iamVjdCBrZXkgd2hlcmUgdGhlIGNvZGUgbGl2ZXMuXG5cbiAgICB0aGlzLmJ1Y2tldE5hbWVQYXJhbWV0ZXIgPSBuZXcgUm9zUGFyYW1ldGVyKHRoaXMsICdPU1NCdWNrZXQnLCB7XG4gICAgICB0eXBlOiBSb3NQYXJhbWV0ZXJUeXBlLlNUUklORyxcbiAgICAgIGRlc2NyaXB0aW9uOiBgT1NTIGJ1Y2tldCBmb3IgYXNzZXQgXCIke2lkfVwiYCxcbiAgICB9KTtcblxuICAgIHRoaXMub2JqZWN0S2V5UGFyYW1ldGVyID0gbmV3IFJvc1BhcmFtZXRlcih0aGlzLCAnT1NTT2JqZWN0S2V5Jywge1xuICAgICAgdHlwZTogUm9zUGFyYW1ldGVyVHlwZS5TVFJJTkcsXG4gICAgICBkZXNjcmlwdGlvbjogYE9TUyBvYmplY3Qga2V5IGZvciBhc3NldCBcIiR7aWR9XCJgLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hcnRpZmFjdEhhc2hQYXJhbWV0ZXIgPSBuZXcgUm9zUGFyYW1ldGVyKHRoaXMsICdBcnRpZmFjdEhhc2gnLCB7XG4gICAgICB0eXBlOiBSb3NQYXJhbWV0ZXJUeXBlLlNUUklORyxcbiAgICAgIGRlc2NyaXB0aW9uOiBgQXJ0aWZhY3QgaGFzaCBmb3IgYXNzZXQgXCIke2lkfVwiYCxcbiAgICB9KTtcbiAgfVxufVxuIl19