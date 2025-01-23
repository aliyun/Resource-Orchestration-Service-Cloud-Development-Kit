using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod.Datasource
{
    /// <summary>Represents a `MessageCallback`.</summary>
    [JsiiInterface(nativeType: typeof(IMessageCallback), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.IMessageCallback")]
    public interface IMessageCallback : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AppId: The ID of the application.</summary>
        [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppId
        {
            get;
        }

        /// <summary>Attribute AuthKey: The cryptographic key.</summary>
        /// <remarks>
        /// This parameter is returned only for HTTP callbacks.
        /// </remarks>
        [JsiiProperty(name: "attrAuthKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuthKey
        {
            get;
        }

        /// <summary>Attribute AuthSwitch: Indicates whether callback authentication is enabled.</summary>
        /// <remarks>
        /// This parameter is returned only for HTTP callbacks.
        /// </remarks>
        [JsiiProperty(name: "attrAuthSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuthSwitch
        {
            get;
        }

        /// <summary>Attribute CallbackType: The callback method.</summary>
        [JsiiProperty(name: "attrCallbackType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackType
        {
            get;
        }

        /// <summary>Attribute CallbackUrl: The callback URL.</summary>
        /// <remarks>
        /// This parameter is returned only for HTTP callbacks.
        /// </remarks>
        [JsiiProperty(name: "attrCallbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallbackUrl
        {
            get;
        }

        /// <summary>Attribute EventTypeList: The type of the callback event.</summary>
        [JsiiProperty(name: "attrEventTypeList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEventTypeList
        {
            get;
        }

        /// <summary>Attribute MnsEndpoint: The public endpoint of MNS.</summary>
        /// <remarks>
        /// This parameter is returned only for MNS callbacks.
        /// </remarks>
        [JsiiProperty(name: "attrMnsEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMnsEndpoint
        {
            get;
        }

        /// <summary>Attribute MnsQueueName: The name of the Message Service (MNS) queue.</summary>
        /// <remarks>
        /// This parameter is returned only for MNS callbacks.
        /// </remarks>
        [JsiiProperty(name: "attrMnsQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMnsQueueName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.datasource.MessageCallbackProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbackProps Props
        {
            get;
        }

        /// <summary>Represents a `MessageCallback`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMessageCallback), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.IMessageCallback")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallback
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AppId: The ID of the application.</summary>
            [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AuthKey: The cryptographic key.</summary>
            /// <remarks>
            /// This parameter is returned only for HTTP callbacks.
            /// </remarks>
            [JsiiProperty(name: "attrAuthKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuthKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AuthSwitch: Indicates whether callback authentication is enabled.</summary>
            /// <remarks>
            /// This parameter is returned only for HTTP callbacks.
            /// </remarks>
            [JsiiProperty(name: "attrAuthSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuthSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackType: The callback method.</summary>
            [JsiiProperty(name: "attrCallbackType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallbackUrl: The callback URL.</summary>
            /// <remarks>
            /// This parameter is returned only for HTTP callbacks.
            /// </remarks>
            [JsiiProperty(name: "attrCallbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallbackUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EventTypeList: The type of the callback event.</summary>
            [JsiiProperty(name: "attrEventTypeList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEventTypeList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MnsEndpoint: The public endpoint of MNS.</summary>
            /// <remarks>
            /// This parameter is returned only for MNS callbacks.
            /// </remarks>
            [JsiiProperty(name: "attrMnsEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMnsEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MnsQueueName: The name of the Message Service (MNS) queue.</summary>
            /// <remarks>
            /// This parameter is returned only for MNS callbacks.
            /// </remarks>
            [JsiiProperty(name: "attrMnsQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMnsQueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.datasource.MessageCallbackProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbackProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbackProps>()!;
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
