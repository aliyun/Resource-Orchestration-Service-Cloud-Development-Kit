using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource
{
    /// <summary>Represents a `Flow`.</summary>
    [JsiiInterface(nativeType: typeof(IFlow), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.IFlow")]
    public interface IFlow : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The time when the flow was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard.</summary>
        /// <remarks>
        /// Considering compatibility, the system supports the two flow definition specifications.
        /// </remarks>
        [JsiiProperty(name: "attrDefinition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefinition
        {
            get;
        }

        /// <summary>Attribute Description: The description of the flow.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute FlowId: The unique ID of the flow.</summary>
        [JsiiProperty(name: "attrFlowId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFlowId
        {
            get;
        }

        /// <summary>Attribute FlowName: The name of the flow.</summary>
        /// <remarks>
        /// The name must be unique within a region for the same Alibaba Cloud account.
        /// </remarks>
        [JsiiProperty(name: "attrFlowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFlowName
        {
            get;
        }

        /// <summary>Attribute LastModifiedTime: The time when the flow was last modified.</summary>
        [JsiiProperty(name: "attrLastModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastModifiedTime
        {
            get;
        }

        /// <summary>Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies.</summary>
        /// <remarks>
        /// During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
        /// </remarks>
        [JsiiProperty(name: "attrRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRoleArn
        {
            get;
        }

        /// <summary>Attribute Type: The type of the flow.</summary>
        /// <remarks>
        /// Valid values are FDL or DEFAULT.
        /// </remarks>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fnf.datasource.FlowProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.IFlowProps Props
        {
            get;
        }

        /// <summary>Represents a `Flow`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFlow), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.IFlow")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.IFlow
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The time when the flow was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard.</summary>
            /// <remarks>
            /// Considering compatibility, the system supports the two flow definition specifications.
            /// </remarks>
            [JsiiProperty(name: "attrDefinition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefinition
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the flow.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FlowId: The unique ID of the flow.</summary>
            [JsiiProperty(name: "attrFlowId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFlowId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FlowName: The name of the flow.</summary>
            /// <remarks>
            /// The name must be unique within a region for the same Alibaba Cloud account.
            /// </remarks>
            [JsiiProperty(name: "attrFlowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFlowName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastModifiedTime: The time when the flow was last modified.</summary>
            [JsiiProperty(name: "attrLastModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastModifiedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies.</summary>
            /// <remarks>
            /// During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
            /// </remarks>
            [JsiiProperty(name: "attrRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRoleArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: The type of the flow.</summary>
            /// <remarks>
            /// Valid values are FDL or DEFAULT.
            /// </remarks>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fnf.datasource.FlowProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.IFlowProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.IFlowProps>()!;
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
