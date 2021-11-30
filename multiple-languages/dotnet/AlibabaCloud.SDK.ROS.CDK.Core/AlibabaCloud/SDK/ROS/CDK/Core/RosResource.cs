using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents a ROS resource.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosResource), fullyQualifiedName: "@alicloud/ros-cdk-core.RosResource", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosResourceProps\"}}]")]
    public class RosResource : AlibabaCloud.SDK.ROS.CDK.Core.RosRefElement
    {
        /// <summary>Creates a resource construct.</summary>
        public RosResource(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IRosResourceProps props): base(new DeputyProps(new object?[]{scope, id, props}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosResource(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosResource(DeputyProps props): base(props)
        {
        }

        /// <summary>Check whether the given construct is a RosResource.</summary>
        [JsiiMethod(name: "isRosResource", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"construct\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}}]")]
        public static bool IsRosResource(AlibabaCloud.SDK.ROS.CDK.Core.IConstruct construct)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosResource), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IConstruct)}, new object[]{construct})!;
        }

        [JsiiMethod(name: "addCondition", parametersJson: "[{\"name\":\"con\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosCondition\"}}]")]
        public virtual void AddCondition(AlibabaCloud.SDK.ROS.CDK.Core.RosCondition con)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosCondition)}, new object[]{con});
        }

        [JsiiMethod(name: "addCount", parametersJson: "[{\"name\":\"count\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public virtual void AddCount(object count)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(object)}, new object[]{count});
        }

        /// <summary>Syntactic sugar for `addOverride(path, undefined)`.</summary>
        /// <param name="path">The path of the value to delete.</param>
        [JsiiMethod(name: "addDeletionOverride", parametersJson: "[{\"docs\":{\"summary\":\"The path of the value to delete.\"},\"name\":\"path\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void AddDeletionOverride(string path)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{path});
        }

        /// <summary>Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.</summary>
        /// <remarks>
        /// This can be used for resources across stacks (or nested stack) boundaries
        /// and the dependency will automatically be transferred to the relevant scope.
        /// </remarks>
        [JsiiMethod(name: "addDependsOn", parametersJson: "[{\"name\":\"target\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosResource\"}}]")]
        public virtual void AddDependsOn(AlibabaCloud.SDK.ROS.CDK.Core.RosResource target)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosResource)}, new object[]{target});
        }

        [JsiiMethod(name: "addDesc", parametersJson: "[{\"name\":\"desc\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void AddDesc(string desc)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{desc});
        }

        [JsiiMethod(name: "addMetaData", parametersJson: "[{\"name\":\"key\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void AddMetaData(string key, object @value)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(object)}, new object[]{key, @value});
        }

        /// <summary>Adds an override to the synthesized ROS resource.</summary>
        /// <param name="path">- The path of the property, you can use dot notation to override values in complex types.</param>
        /// <param name="value">- The value.</param>
        /// <remarks>
        /// To add a
        /// property override, either use <c>addPropertyOverride</c> or prefix <c>path</c> with
        /// "Properties." (i.e. <c>Properties.TopicName</c>).
        ///
        /// If the override is nested, separate each nested level using a dot (.) in the path parameter.
        /// If there is an array as part of the nesting, specify the index in the path.
        ///
        /// For example,
        ///
        /// <code><![CDATA[
        /// // Example automatically generated. See https://github.com/aws/jsii/issues/826
        /// AddOverride("Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes", new [] { "myattribute" });
        /// AddOverride("Properties.GlobalSecondaryIndexes.1.ProjectionType", "INCLUDE");
        /// ]]></code>
        ///
        /// would add the overrides
        ///
        /// <code><![CDATA[
        /// "Properties": {
        ///    "GlobalSecondaryIndexes": [
        ///      {
        ///        "Projection": {
        ///          "NonKeyAttributes": [ "myattribute" ]
        ///          ...
        ///        }
        ///        ...
        ///      },
        ///      {
        ///        "ProjectionType": "INCLUDE"
        ///        ...
        ///      },
        ///    ]
        ///    ...
        /// }
        /// ]]></code>
        /// </remarks>
        [JsiiMethod(name: "addOverride", parametersJson: "[{\"docs\":{\"remarks\":\"Any intermdediate keys\nwill be created as needed.\",\"summary\":\"- The path of the property, you can use dot notation to override values in complex types.\"},\"name\":\"path\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"remarks\":\"Could be primitive or complex.\",\"summary\":\"- The value.\"},\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void AddOverride(string path, object @value)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(object)}, new object[]{path, @value});
        }

        /// <summary>Adds an override that deletes the value of a property from the resource definition.</summary>
        /// <param name="propertyPath">The path to the property.</param>
        [JsiiMethod(name: "addPropertyDeletionOverride", parametersJson: "[{\"docs\":{\"summary\":\"The path to the property.\"},\"name\":\"propertyPath\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void AddPropertyDeletionOverride(string propertyPath)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{propertyPath});
        }

        /// <summary>Adds an override to a resource property.</summary>
        /// <param name="propertyPath">The path of the property.</param>
        /// <param name="value">The value.</param>
        /// <remarks>
        /// Syntactic sugar for <c>addOverride("Properties.&lt;...&gt;", value)</c>.
        /// </remarks>
        [JsiiMethod(name: "addPropertyOverride", parametersJson: "[{\"docs\":{\"summary\":\"The path of the property.\"},\"name\":\"propertyPath\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The value.\"},\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void AddPropertyOverride(string propertyPath, object @value)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(object)}, new object[]{propertyPath, @value});
        }

        [JsiiMethod(name: "addRosDependency", parametersJson: "[{\"name\":\"target\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void AddRosDependency(string target)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{target});
        }

        /// <summary>Sets the deletion policy of the resource based on the removal policy specified.</summary>
        [JsiiMethod(name: "applyRemovalPolicy", parametersJson: "[{\"name\":\"policy\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RemovalPolicy\"}},{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RemovalPolicyOptions\"}}]")]
        public virtual void ApplyRemovalPolicy(AlibabaCloud.SDK.ROS.CDK.Core.RemovalPolicy? policy = null, AlibabaCloud.SDK.ROS.CDK.Core.IRemovalPolicyOptions? options = null)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.RemovalPolicy), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRemovalPolicyOptions)}, new object?[]{policy, options});
        }

        /// <summary>Returns a token for an runtime attribute of this resource.</summary>
        /// <param name="attributeName">The name of the attribute.</param>
        /// <remarks>
        /// Ideally, use generated attribute accessors (e.g. <c>resource.arn</c>), but this can be used for future compatibility
        /// in case there is no generated attribute.
        /// </remarks>
        [JsiiMethod(name: "getAtt", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Reference\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The name of the attribute.\"},\"name\":\"attributeName\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.Reference GetAtt(string attributeName)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.Reference>(new System.Type[]{typeof(string)}, new object[]{attributeName})!;
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected virtual System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>Returns a string representation of this construct.</summary>
        /// <returns>a string representation of this resource</returns>
        [JsiiMethod(name: "toString", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", isOverride: true)]
        public override string ToString()
        {
            return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
        }

        [JsiiMethod(name: "validateProperties", parametersJson: "[{\"name\":\"_properties\",\"type\":{\"primitive\":\"any\"}}]")]
        protected virtual void ValidateProperties(object properties)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(object)}, new object[]{properties});
        }

        /// <summary>Options for this resource, such as condition, update policy etc.</summary>
        [JsiiProperty(name: "rosOptions", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IRosResourceOptions\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IRosResourceOptions RosOptions
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosResourceOptions>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected virtual System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <summary>ROS resource type.</summary>
        [JsiiProperty(name: "rosResourceType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string RosResourceType
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Return properties modified after initiation.</summary>
        /// <remarks>
        /// Resources that expose mutable properties should override this function to
        /// collect and return the properties object for this resource.
        /// </remarks>
        [JsiiProperty(name: "updatedProperites", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected virtual System.Collections.Generic.IDictionary<string, object> UpdatedProperites
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }
    }
}
