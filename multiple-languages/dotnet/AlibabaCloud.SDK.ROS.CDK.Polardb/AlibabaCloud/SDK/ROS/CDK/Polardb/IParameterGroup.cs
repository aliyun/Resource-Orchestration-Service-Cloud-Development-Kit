using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Represents a `ParameterGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IParameterGroup), fullyQualifiedName: "@alicloud/ros-cdk-polardb.IParameterGroup")]
    public interface IParameterGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The time when the parameter template was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DbType: The type of the database engine.</summary>
        [JsiiProperty(name: "attrDbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbType
        {
            get;
        }

        /// <summary>Attribute DbVersion: The version of the database engine.</summary>
        [JsiiProperty(name: "attrDbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbVersion
        {
            get;
        }

        /// <summary>Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.</summary>
        [JsiiProperty(name: "attrForceRestart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrForceRestart
        {
            get;
        }

        /// <summary>Attribute ParameterCounts: The number of parameters in the parameter template.</summary>
        [JsiiProperty(name: "attrParameterCounts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameterCounts
        {
            get;
        }

        /// <summary>Attribute ParameterGroupDesc: The description of the parameter template.</summary>
        [JsiiProperty(name: "attrParameterGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameterGroupDesc
        {
            get;
        }

        /// <summary>Attribute ParameterGroupId: The ID of the parameter group.</summary>
        [JsiiProperty(name: "attrParameterGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameterGroupId
        {
            get;
        }

        /// <summary>Attribute ParameterGroupName: The name of the parameter template.</summary>
        [JsiiProperty(name: "attrParameterGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameterGroupName
        {
            get;
        }

        /// <summary>Attribute ParameterGroupType: The type of the parameter template.</summary>
        [JsiiProperty(name: "attrParameterGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameterGroupType
        {
            get;
        }

        /// <summary>Attribute Parameters: The list of the parameters.</summary>
        [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameters
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.ParameterGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Polardb.IParameterGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `ParameterGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IParameterGroup), fullyQualifiedName: "@alicloud/ros-cdk-polardb.IParameterGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IParameterGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The time when the parameter template was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbType: The type of the database engine.</summary>
            [JsiiProperty(name: "attrDbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbVersion: The version of the database engine.</summary>
            [JsiiProperty(name: "attrDbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.</summary>
            [JsiiProperty(name: "attrForceRestart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrForceRestart
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParameterCounts: The number of parameters in the parameter template.</summary>
            [JsiiProperty(name: "attrParameterCounts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameterCounts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParameterGroupDesc: The description of the parameter template.</summary>
            [JsiiProperty(name: "attrParameterGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameterGroupDesc
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParameterGroupId: The ID of the parameter group.</summary>
            [JsiiProperty(name: "attrParameterGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameterGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParameterGroupName: The name of the parameter template.</summary>
            [JsiiProperty(name: "attrParameterGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameterGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParameterGroupType: The type of the parameter template.</summary>
            [JsiiProperty(name: "attrParameterGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameterGroupType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Parameters: The list of the parameters.</summary>
            [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameters
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.ParameterGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Polardb.IParameterGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardb.IParameterGroupProps>()!;
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
