using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod
{
    /// <summary>Represents a `MessageCallback`.</summary>
    [JsiiInterface(nativeType: typeof(IMessageCallback), fullyQualifiedName: "@alicloud/ros-cdk-vod.IMessageCallback")]
    public interface IMessageCallback : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AppId: appid.</summary>
        [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppId
        {
            get;
        }

        /// <summary>Attribute AuthKey: auth key.</summary>
        [JsiiProperty(name: "attrAuthKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuthKey
        {
            get;
        }

        /// <summary>Attribute AuthSwitch: auth swith.</summary>
        [JsiiProperty(name: "attrAuthSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuthSwitch
        {
            get;
        }

        /// <summary>Attribute CallbackType: callback type.</summary>
        [JsiiProperty(name: "attrCallbackType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackType
        {
            get;
        }

        /// <summary>Attribute CallbackUrl: url.</summary>
        [JsiiProperty(name: "attrCallbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackUrl
        {
            get;
        }

        /// <summary>Attribute EventTypeList: event type.</summary>
        [JsiiProperty(name: "attrEventTypeList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEventTypeList
        {
            get;
        }

        /// <summary>Attribute MnsEndpoint: mns endpoint.</summary>
        [JsiiProperty(name: "attrMnsEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMnsEndpoint
        {
            get;
        }

        /// <summary>Attribute MnsQueueName: queue name.</summary>
        [JsiiProperty(name: "attrMnsQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMnsQueueName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.MessageCallbackProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vod.IMessageCallbackProps Props
        {
            get;
        }

        /// <summary>Represents a `MessageCallback`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMessageCallback), fullyQualifiedName: "@alicloud/ros-cdk-vod.IMessageCallback")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.IMessageCallback
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AppId: appid.</summary>
            [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AuthKey: auth key.</summary>
            [JsiiProperty(name: "attrAuthKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuthKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AuthSwitch: auth swith.</summary>
            [JsiiProperty(name: "attrAuthSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuthSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackType: callback type.</summary>
            [JsiiProperty(name: "attrCallbackType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackUrl: url.</summary>
            [JsiiProperty(name: "attrCallbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EventTypeList: event type.</summary>
            [JsiiProperty(name: "attrEventTypeList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEventTypeList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MnsEndpoint: mns endpoint.</summary>
            [JsiiProperty(name: "attrMnsEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMnsEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MnsQueueName: queue name.</summary>
            [JsiiProperty(name: "attrMnsQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMnsQueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.MessageCallbackProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vod.IMessageCallbackProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vod.IMessageCallbackProps>()!;
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
