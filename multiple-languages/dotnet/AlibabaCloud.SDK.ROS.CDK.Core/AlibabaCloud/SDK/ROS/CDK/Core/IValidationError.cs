using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>An error returned during the validation phase.</summary>
    [JsiiInterface(nativeType: typeof(IValidationError), fullyQualifiedName: "@alicloud/ros-cdk-core.ValidationError")]
    public interface IValidationError
    {
        /// <summary>The error message.</summary>
        [JsiiProperty(name: "message", typeJson: "{\"primitive\":\"string\"}")]
        string Message
        {
            get;
        }

        /// <summary>The construct which emitted the error.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.Construct Source
        {
            get;
        }

        /// <summary>An error returned during the validation phase.</summary>
        [JsiiTypeProxy(nativeType: typeof(IValidationError), fullyQualifiedName: "@alicloud/ros-cdk-core.ValidationError")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IValidationError
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The error message.</summary>
            [JsiiProperty(name: "message", typeJson: "{\"primitive\":\"string\"}")]
            public string Message
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The construct which emitted the error.</summary>
            [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Construct Source
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            }
        }
    }
}
