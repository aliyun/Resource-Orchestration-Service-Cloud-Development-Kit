using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Represents a `AuditCallback`.</summary>
    [JsiiInterface(nativeType: typeof(IAuditCallback), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.IAuditCallback")]
    public interface IAuditCallback : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AuditCallbackName: The AuditCallback name defined by the customer.</summary>
        [JsiiProperty(name: "attrAuditCallbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuditCallbackName
        {
            get;
        }

        /// <summary>Attribute CallbackSuggestions: List of audit results supported by message notification.</summary>
        [JsiiProperty(name: "attrCallbackSuggestions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackSuggestions
        {
            get;
        }

        /// <summary>Attribute CallbackTypes: A list of Callback types.</summary>
        [JsiiProperty(name: "attrCallbackTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackTypes
        {
            get;
        }

        /// <summary>Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.</summary>
        [JsiiProperty(name: "attrCryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCryptType
        {
            get;
        }

        /// <summary>Attribute Url: The detection result will be called back to the url.</summary>
        [JsiiProperty(name: "attrUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUrl
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.AuditCallbackProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Aligreen.IAuditCallbackProps Props
        {
            get;
        }

        /// <summary>Represents a `AuditCallback`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAuditCallback), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.IAuditCallback")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IAuditCallback
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AuditCallbackName: The AuditCallback name defined by the customer.</summary>
            [JsiiProperty(name: "attrAuditCallbackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuditCallbackName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackSuggestions: List of audit results supported by message notification.</summary>
            [JsiiProperty(name: "attrCallbackSuggestions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackSuggestions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackTypes: A list of Callback types.</summary>
            [JsiiProperty(name: "attrCallbackTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.</summary>
            [JsiiProperty(name: "attrCryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCryptType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Url: The detection result will be called back to the url.</summary>
            [JsiiProperty(name: "attrUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.AuditCallbackProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Aligreen.IAuditCallbackProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Aligreen.IAuditCallbackProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
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
