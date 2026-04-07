using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `MessageContact`.</summary>
    [JsiiInterface(nativeType: typeof(IMessageContact), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IMessageContact")]
    public interface IMessageContact : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: Creation time of Message Contact.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute EmailAddress: The email address of the contact.</summary>
        [JsiiProperty(name: "attrEmailAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEmailAddress
        {
            get;
        }

        /// <summary>Attribute MessageContactId: The ID of Message Contact.</summary>
        [JsiiProperty(name: "attrMessageContactId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMessageContactId
        {
            get;
        }

        /// <summary>Attribute MessageContactName: The name of the contact.</summary>
        [JsiiProperty(name: "attrMessageContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMessageContactName
        {
            get;
        }

        /// <summary>Attribute MessageTypes: The types of messages received by the contact.</summary>
        [JsiiProperty(name: "attrMessageTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMessageTypes
        {
            get;
        }

        /// <summary>Attribute PhoneNumber: The mobile phone number of the contact.</summary>
        [JsiiProperty(name: "attrPhoneNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPhoneNumber
        {
            get;
        }

        /// <summary>Attribute Title: The job title of the contact.</summary>
        [JsiiProperty(name: "attrTitle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTitle
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.MessageContactProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IMessageContactProps Props
        {
            get;
        }

        /// <summary>Represents a `MessageContact`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMessageContact), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IMessageContact")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IMessageContact
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: Creation time of Message Contact.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EmailAddress: The email address of the contact.</summary>
            [JsiiProperty(name: "attrEmailAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEmailAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MessageContactId: The ID of Message Contact.</summary>
            [JsiiProperty(name: "attrMessageContactId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMessageContactId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MessageContactName: The name of the contact.</summary>
            [JsiiProperty(name: "attrMessageContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMessageContactName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MessageTypes: The types of messages received by the contact.</summary>
            [JsiiProperty(name: "attrMessageTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMessageTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PhoneNumber: The mobile phone number of the contact.</summary>
            [JsiiProperty(name: "attrPhoneNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPhoneNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Title: The job title of the contact.</summary>
            [JsiiProperty(name: "attrTitle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTitle
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.MessageContactProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IMessageContactProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IMessageContactProps>()!;
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
