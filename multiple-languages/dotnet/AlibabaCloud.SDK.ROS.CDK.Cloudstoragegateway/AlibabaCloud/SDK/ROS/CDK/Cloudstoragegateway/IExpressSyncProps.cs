using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway
{
    /// <summary>Properties for defining a `ExpressSync`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IExpressSyncProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.ExpressSyncProps")]
    public interface IExpressSyncProps
    {
        /// <summary>Property bucketName: The name of the bucket.</summary>
        /// <remarks>
        /// Note:
        ///
        /// <list type="bullet">
        /// <description>You can specify only one OSS bucket for a synchronization group. All data
        /// changes in the bucket are synchronized to your on-premises environment.</description>
        /// <description>If you have not created a share for the OSS bucket, you must first create a
        /// share between the file gateway and the OSS bucket.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketName
        {
            get;
        }

        /// <summary>Property bucketRegion: The region of the OSS bucket.</summary>
        [JsiiProperty(name: "bucketRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketRegion
        {
            get;
        }

        /// <summary>Property name: The name of the express synchronization group.</summary>
        /// <remarks>
        /// The name must be 1 to 128
        /// characters in length and can contain letters, Chinese characters, digits, periods
        /// (.), underscores (_), and hyphens (-). The name must start with a letter or a
        /// Chinese character.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property bucketPrefix: The prefix of the OSS bucket.</summary>
        [JsiiProperty(name: "bucketPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BucketPrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the express synchronization group.</summary>
        /// <remarks>
        /// The description can be up
        /// to 255 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ExpressSync`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IExpressSyncProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.ExpressSyncProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway.IExpressSyncProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bucketName: The name of the bucket.</summary>
            /// <remarks>
            /// Note:
            ///
            /// <list type="bullet">
            /// <description>You can specify only one OSS bucket for a synchronization group. All data
            /// changes in the bucket are synchronized to your on-premises environment.</description>
            /// <description>If you have not created a share for the OSS bucket, you must first create a
            /// share between the file gateway and the OSS bucket.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bucketRegion: The region of the OSS bucket.</summary>
            [JsiiProperty(name: "bucketRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the express synchronization group.</summary>
            /// <remarks>
            /// The name must be 1 to 128
            /// characters in length and can contain letters, Chinese characters, digits, periods
            /// (.), underscores (_), and hyphens (-). The name must start with a letter or a
            /// Chinese character.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bucketPrefix: The prefix of the OSS bucket.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bucketPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BucketPrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the express synchronization group.</summary>
            /// <remarks>
            /// The description can be up
            /// to 255 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
