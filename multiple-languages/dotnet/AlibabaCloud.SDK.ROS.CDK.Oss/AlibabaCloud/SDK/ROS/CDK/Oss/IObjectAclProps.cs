using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `ObjectAcl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IObjectAclProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.ObjectAclProps")]
    public interface IObjectAclProps
    {
        /// <summary>Property bucket: Bucket name.</summary>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>Property objectAcl: Object acl.</summary>
        [JsiiProperty(name: "objectAcl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ObjectAcl
        {
            get;
        }

        /// <summary>Property objectKey: Object key.</summary>
        [JsiiProperty(name: "objectKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ObjectKey
        {
            get;
        }

        /// <summary>Properties for defining a `ObjectAcl`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IObjectAclProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.ObjectAclProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IObjectAclProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bucket: Bucket name.</summary>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property objectAcl: Object acl.</summary>
            [JsiiProperty(name: "objectAcl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ObjectAcl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property objectKey: Object key.</summary>
            [JsiiProperty(name: "objectKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ObjectKey
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
