using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Represents a `Trigger`.</summary>
    [JsiiInterface(nativeType: typeof(ITrigger), fullyQualifiedName: "@alicloud/ros-cdk-fc3.ITrigger")]
    public interface ITrigger : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute FunctionName: Function name.</summary>
        [JsiiProperty(name: "attrFunctionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFunctionName
        {
            get;
        }

        /// <summary>Attribute TriggerId: The trigger ID.</summary>
        [JsiiProperty(name: "attrTriggerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTriggerId
        {
            get;
        }

        /// <summary>Attribute TriggerName: Trigger name.</summary>
        [JsiiProperty(name: "attrTriggerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTriggerName
        {
            get;
        }

        /// <summary>Attribute UrlInternet: The public domain address.</summary>
        /// <remarks>
        /// You can access HTTP triggers over the Internet by using HTTP or HTTPS.
        /// </remarks>
        [JsiiProperty(name: "attrUrlInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUrlInternet
        {
            get;
        }

        /// <summary>Attribute UrlIntranet: The private endpoint.</summary>
        /// <remarks>
        /// In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
        /// </remarks>
        [JsiiProperty(name: "attrUrlIntranet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUrlIntranet
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc3.TriggerProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Fc3.ITriggerProps Props
        {
            get;
        }

        /// <summary>Represents a `Trigger`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITrigger), fullyQualifiedName: "@alicloud/ros-cdk-fc3.ITrigger")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.ITrigger
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute FunctionName: Function name.</summary>
            [JsiiProperty(name: "attrFunctionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFunctionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TriggerId: The trigger ID.</summary>
            [JsiiProperty(name: "attrTriggerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTriggerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TriggerName: Trigger name.</summary>
            [JsiiProperty(name: "attrTriggerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTriggerName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UrlInternet: The public domain address.</summary>
            /// <remarks>
            /// You can access HTTP triggers over the Internet by using HTTP or HTTPS.
            /// </remarks>
            [JsiiProperty(name: "attrUrlInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUrlInternet
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UrlIntranet: The private endpoint.</summary>
            /// <remarks>
            /// In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
            /// </remarks>
            [JsiiProperty(name: "attrUrlIntranet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUrlIntranet
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc3.TriggerProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Fc3.ITriggerProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fc3.ITriggerProps>()!;
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
