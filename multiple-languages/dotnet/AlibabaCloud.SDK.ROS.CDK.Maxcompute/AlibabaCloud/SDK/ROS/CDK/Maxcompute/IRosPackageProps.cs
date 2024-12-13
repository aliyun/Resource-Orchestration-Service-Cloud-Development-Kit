using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Maxcompute
{
    /// <summary>Properties for defining a `RosPackage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosPackageProps")]
    public interface IRosPackageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: packageName: The name of the project package.
        /// </remarks>
        [JsiiProperty(name: "packageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PackageName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: The name of the MaxCompute project.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: acl: The access-control list (ACL).
        /// </remarks>
        [JsiiProperty(name: "acl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosPackage.AclProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Acl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPackage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Maxcompute.IRosPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: packageName: The name of the project package.
            /// </remarks>
            [JsiiProperty(name: "packageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PackageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: The name of the MaxCompute project.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: acl: The access-control list (ACL).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosPackage.AclProperty\"}]}}", isOptional: true)]
            public object? Acl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
