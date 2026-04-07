using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `ImageEventOperation`.</summary>
    [JsiiInterface(nativeType: typeof(IImageEventOperation), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IImageEventOperation")]
    public interface IImageEventOperation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Conditions: The rule conditions.</summary>
        /// <remarks>
        /// Specify a value in the JSON format.
        /// </remarks>
        [JsiiProperty(name: "attrConditions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConditions
        {
            get;
        }

        /// <summary>Attribute EventKey: Image Event Key.</summary>
        [JsiiProperty(name: "attrEventKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEventKey
        {
            get;
        }

        /// <summary>Attribute EventName: Image Event Name.</summary>
        [JsiiProperty(name: "attrEventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEventName
        {
            get;
        }

        /// <summary>Attribute EventType: Image Event Type.</summary>
        [JsiiProperty(name: "attrEventType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEventType
        {
            get;
        }

        /// <summary>Attribute ImageEventOperationId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrImageEventOperationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageEventOperationId
        {
            get;
        }

        /// <summary>Attribute Note: The remarks.</summary>
        [JsiiProperty(name: "attrNote", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNote
        {
            get;
        }

        /// <summary>Attribute OperationCode: Event Operation Code.</summary>
        [JsiiProperty(name: "attrOperationCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOperationCode
        {
            get;
        }

        /// <summary>Attribute Scenarios: Event Scenarios.</summary>
        [JsiiProperty(name: "attrScenarios", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScenarios
        {
            get;
        }

        /// <summary>Attribute Source: The source of the whitelist.</summary>
        [JsiiProperty(name: "attrSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSource
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.ImageEventOperationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IImageEventOperationProps Props
        {
            get;
        }

        /// <summary>Represents a `ImageEventOperation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IImageEventOperation), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IImageEventOperation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IImageEventOperation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Conditions: The rule conditions.</summary>
            /// <remarks>
            /// Specify a value in the JSON format.
            /// </remarks>
            [JsiiProperty(name: "attrConditions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConditions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EventKey: Image Event Key.</summary>
            [JsiiProperty(name: "attrEventKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEventKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EventName: Image Event Name.</summary>
            [JsiiProperty(name: "attrEventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEventName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EventType: Image Event Type.</summary>
            [JsiiProperty(name: "attrEventType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEventType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageEventOperationId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrImageEventOperationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageEventOperationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Note: The remarks.</summary>
            [JsiiProperty(name: "attrNote", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNote
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OperationCode: Event Operation Code.</summary>
            [JsiiProperty(name: "attrOperationCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOperationCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Scenarios: Event Scenarios.</summary>
            [JsiiProperty(name: "attrScenarios", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScenarios
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Source: The source of the whitelist.</summary>
            [JsiiProperty(name: "attrSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSource
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.ImageEventOperationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IImageEventOperationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IImageEventOperationProps>()!;
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
