using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `RosDomain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosDomainProps")]
    public interface IRosDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bucketName: bucket name.
        /// </remarks>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainName: Domain name
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Properties for defining a `RosDomain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IRosDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bucketName: bucket name.
            /// </remarks>
            [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: Domain name
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
