using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.OssDeployment
{
    /// <summary>Source information.</summary>
    [JsiiInterface(nativeType: typeof(ISourceConfig), fullyQualifiedName: "@alicloud/ros-cdk-ossdeployment.SourceConfig")]
    public interface ISourceConfig
    {
        /// <summary>The name of source bucket to deploy from.</summary>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>An object key in the source bucket to deploy from.</summary>
        [JsiiProperty(name: "objectKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ObjectKey
        {
            get;
        }

        /// <summary>The name of source local file to deploy from.</summary>
        [JsiiProperty(name: "fileName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? FileName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Source information.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISourceConfig), fullyQualifiedName: "@alicloud/ros-cdk-ossdeployment.SourceConfig")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.OssDeployment.ISourceConfig
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The name of source bucket to deploy from.</summary>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>An object key in the source bucket to deploy from.</summary>
            [JsiiProperty(name: "objectKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ObjectKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>The name of source local file to deploy from.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "fileName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? FileName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
