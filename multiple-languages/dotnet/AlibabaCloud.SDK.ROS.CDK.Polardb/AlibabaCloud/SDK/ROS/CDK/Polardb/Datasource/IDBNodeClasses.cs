using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Represents a `DBNodeClasses`.</summary>
    [JsiiInterface(nativeType: typeof(IDBNodeClasses), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.IDBNodeClasses")]
    public interface IDBNodeClasses : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DBNodeClasses: The list of db node classes.</summary>
        [JsiiProperty(name: "attrDbNodeClasses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbNodeClasses
        {
            get;
        }

        /// <summary>Attribute DBNodeClassIds: The list of db node class ids.</summary>
        [JsiiProperty(name: "attrDbNodeClassIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbNodeClassIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.datasource.DBNodeClassesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IDBNodeClassesProps Props
        {
            get;
        }

        /// <summary>Represents a `DBNodeClasses`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBNodeClasses), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.IDBNodeClasses")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IDBNodeClasses
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DBNodeClasses: The list of db node classes.</summary>
            [JsiiProperty(name: "attrDbNodeClasses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbNodeClasses
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBNodeClassIds: The list of db node class ids.</summary>
            [JsiiProperty(name: "attrDbNodeClassIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbNodeClassIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.datasource.DBNodeClassesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IDBNodeClassesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IDBNodeClassesProps>()!;
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
