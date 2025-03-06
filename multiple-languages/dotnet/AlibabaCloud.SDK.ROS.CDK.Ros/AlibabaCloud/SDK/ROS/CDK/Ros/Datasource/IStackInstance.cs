using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros.Datasource
{
    /// <summary>Represents a `StackInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IStackInstance), fullyQualifiedName: "@alicloud/ros-cdk-ros.datasource.IStackInstance")]
    public interface IStackInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccountId: The account id of the stack.</summary>
        [JsiiProperty(name: "attrAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccountId
        {
            get;
        }

        /// <summary>Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.</summary>
        [JsiiProperty(name: "attrDriftDetectionTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDriftDetectionTime
        {
            get;
        }

        /// <summary>Attribute Outputs: The outputs of the stack instance.</summary>
        [JsiiProperty(name: "attrOutputs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOutputs
        {
            get;
        }

        /// <summary>Attribute ParameterOverrides: Override parameter list.</summary>
        [JsiiProperty(name: "attrParameterOverrides", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameterOverrides
        {
            get;
        }

        /// <summary>Attribute RdFolderId: The resource folder ID of the resource directory.</summary>
        [JsiiProperty(name: "attrRdFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRdFolderId
        {
            get;
        }

        /// <summary>Attribute RegionId: The region id of the stack.</summary>
        [JsiiProperty(name: "attrRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRegionId
        {
            get;
        }

        /// <summary>Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.</summary>
        [JsiiProperty(name: "attrStackDriftStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStackDriftStatus
        {
            get;
        }

        /// <summary>Attribute StackGroupId: The resource stack group ID.</summary>
        [JsiiProperty(name: "attrStackGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStackGroupId
        {
            get;
        }

        /// <summary>Attribute StackGroupName: The resource stack group name.</summary>
        [JsiiProperty(name: "attrStackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStackGroupName
        {
            get;
        }

        /// <summary>Attribute StackId: The stack id of stack instance.</summary>
        [JsiiProperty(name: "attrStackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStackId
        {
            get;
        }

        /// <summary>Attribute Status: Resource stack status.</summary>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatus
        {
            get;
        }

        /// <summary>Attribute StatusReason: Status reason description.</summary>
        [JsiiProperty(name: "attrStatusReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatusReason
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ros.datasource.StackInstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ros.Datasource.IStackInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `StackInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStackInstance), fullyQualifiedName: "@alicloud/ros-cdk-ros.datasource.IStackInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.Datasource.IStackInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccountId: The account id of the stack.</summary>
            [JsiiProperty(name: "attrAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.</summary>
            [JsiiProperty(name: "attrDriftDetectionTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDriftDetectionTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Outputs: The outputs of the stack instance.</summary>
            [JsiiProperty(name: "attrOutputs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOutputs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParameterOverrides: Override parameter list.</summary>
            [JsiiProperty(name: "attrParameterOverrides", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameterOverrides
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RdFolderId: The resource folder ID of the resource directory.</summary>
            [JsiiProperty(name: "attrRdFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRdFolderId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RegionId: The region id of the stack.</summary>
            [JsiiProperty(name: "attrRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.</summary>
            [JsiiProperty(name: "attrStackDriftStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStackDriftStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StackGroupId: The resource stack group ID.</summary>
            [JsiiProperty(name: "attrStackGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStackGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StackGroupName: The resource stack group name.</summary>
            [JsiiProperty(name: "attrStackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStackGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StackId: The stack id of stack instance.</summary>
            [JsiiProperty(name: "attrStackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStackId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Status: Resource stack status.</summary>
            [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StatusReason: Status reason description.</summary>
            [JsiiProperty(name: "attrStatusReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatusReason
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ros.datasource.StackInstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ros.Datasource.IStackInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ros.Datasource.IStackInstanceProps>()!;
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
