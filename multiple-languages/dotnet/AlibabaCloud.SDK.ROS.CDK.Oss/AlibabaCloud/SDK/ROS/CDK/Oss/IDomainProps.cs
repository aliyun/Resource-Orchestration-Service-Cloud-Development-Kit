using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `Domain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.DomainProps")]
    public interface IDomainProps
    {
        /// <summary>Property bucketName: bucket name.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketName
        {
            get;
        }

        /// <summary>Property domainName: Domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Properties for defining a `Domain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.DomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bucketName: bucket name.</summary>
            [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domainName: Domain name.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
