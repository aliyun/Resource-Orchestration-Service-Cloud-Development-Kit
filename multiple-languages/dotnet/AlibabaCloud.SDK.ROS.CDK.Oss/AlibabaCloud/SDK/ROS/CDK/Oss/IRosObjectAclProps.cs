using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `RosObjectAcl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosObjectAclProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosObjectAclProps")]
    public interface IRosObjectAclProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bucket: Bucket name.
        /// </remarks>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: objectAcl: Object acl.
        /// </remarks>
        [JsiiProperty(name: "objectAcl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ObjectAcl
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: objectKey: Object key.
        /// </remarks>
        [JsiiProperty(name: "objectKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ObjectKey
        {
            get;
        }

        /// <summary>Properties for defining a `RosObjectAcl`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosObjectAclProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosObjectAclProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IRosObjectAclProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bucket: Bucket name.
            /// </remarks>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: objectAcl: Object acl.
            /// </remarks>
            [JsiiProperty(name: "objectAcl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ObjectAcl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: objectKey: Object key.
            /// </remarks>
            [JsiiProperty(name: "objectKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ObjectKey
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
