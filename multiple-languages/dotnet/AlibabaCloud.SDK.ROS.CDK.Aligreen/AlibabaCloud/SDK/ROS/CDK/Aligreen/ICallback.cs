using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Represents a `Callback`.</summary>
    [JsiiInterface(nativeType: typeof(ICallback), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.ICallback")]
    public interface ICallback : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CallbackId: The ID of the primary key of the Callback.</summary>
        [JsiiProperty(name: "attrCallbackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackId
        {
            get;
        }

        /// <summary>Attribute CallbackName: The Callback name defined by the customer.</summary>
        [JsiiProperty(name: "attrCallbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackName
        {
            get;
        }

        /// <summary>Attribute CallbackSuggestions: List of audit results supported by message notification.</summary>
        [JsiiProperty(name: "attrCallbackSuggestions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackSuggestions
        {
            get;
        }

        /// <summary>Attribute CallbackTypes: The list of Callback types.</summary>
        [JsiiProperty(name: "attrCallbackTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackTypes
        {
            get;
        }

        /// <summary>Attribute CallbackUrl: The detection result will be called back to the url.</summary>
        [JsiiProperty(name: "attrCallbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackUrl
        {
            get;
        }

        /// <summary>Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.</summary>
        [JsiiProperty(name: "attrCryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCryptType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.CallbackProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Aligreen.ICallbackProps Props
        {
            get;
        }

        /// <summary>Represents a `Callback`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICallback), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.ICallback")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.ICallback
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CallbackId: The ID of the primary key of the Callback.</summary>
            [JsiiProperty(name: "attrCallbackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackName: The Callback name defined by the customer.</summary>
            [JsiiProperty(name: "attrCallbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackSuggestions: List of audit results supported by message notification.</summary>
            [JsiiProperty(name: "attrCallbackSuggestions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackSuggestions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackTypes: The list of Callback types.</summary>
            [JsiiProperty(name: "attrCallbackTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackUrl: The detection result will be called back to the url.</summary>
            [JsiiProperty(name: "attrCallbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.</summary>
            [JsiiProperty(name: "attrCryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCryptType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.CallbackProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Aligreen.ICallbackProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Aligreen.ICallbackProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
