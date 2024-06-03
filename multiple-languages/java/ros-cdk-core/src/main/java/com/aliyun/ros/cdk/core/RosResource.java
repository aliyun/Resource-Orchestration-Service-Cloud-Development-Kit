package com.aliyun.ros.cdk.core;

/**
 * Represents a ROS resource.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.333Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosResource")
public class RosResource extends com.aliyun.ros.cdk.core.RosRefElement {

    protected RosResource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosResource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates a resource construct.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public RosResource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosResourceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Check whether the given construct is a RosResource.
     * <p>
     * @param construct This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isRosResource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct construct) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.RosResource.class, "isRosResource", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { java.util.Objects.requireNonNull(construct, "construct is required") });
    }

    public void addCondition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosCondition con) {
        software.amazon.jsii.Kernel.call(this, "addCondition", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(con, "con is required") });
    }

    public void addCount(final @org.jetbrains.annotations.NotNull java.lang.Object count) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(count instanceof java.lang.Number)
                && !(count instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(count.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("count")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(count.getClass()).toString());
            }
        }
        software.amazon.jsii.Kernel.call(this, "addCount", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(count, "count is required") });
    }

    /**
     * Syntactic sugar for <code>addOverride(path, undefined)</code>.
     * <p>
     * @param path The path of the value to delete. This parameter is required.
     */
    public void addDeletionOverride(final @org.jetbrains.annotations.NotNull java.lang.String path) {
        software.amazon.jsii.Kernel.call(this, "addDeletionOverride", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(path, "path is required") });
    }

    /**
     * Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.
     * <p>
     * This can be used for resources across stacks (or nested stack) boundaries
     * and the dependency will automatically be transferred to the relevant scope.
     * <p>
     * @param target This parameter is required.
     */
    public void addDependsOn(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosResource target) {
        software.amazon.jsii.Kernel.call(this, "addDependsOn", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(target, "target is required") });
    }

    public void addDesc(final @org.jetbrains.annotations.NotNull java.lang.String desc) {
        software.amazon.jsii.Kernel.call(this, "addDesc", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(desc, "desc is required") });
    }

    public void addMetaData(final @org.jetbrains.annotations.NotNull java.lang.String key, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        software.amazon.jsii.Kernel.call(this, "addMetaData", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(key, "key is required"), value });
    }

    /**
     * Adds an override to the synthesized ROS resource.
     * <p>
     * To add a
     * property override, either use <code>addPropertyOverride</code> or prefix <code>path</code> with
     * "Properties." (i.e. <code>Properties.TopicName</code>).
     * <p>
     * If the override is nested, separate each nested level using a dot (.) in the path parameter.
     * If there is an array as part of the nesting, specify the index in the path.
     * <p>
     * For example,
     * <p>
     * <blockquote><pre>
     * addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
     * addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')
     * </pre></blockquote>
     * <p>
     * would add the overrides
     * <p>
     * <blockquote><pre>
     * "Properties": {
     *    "GlobalSecondaryIndexes": [
     *      {
     *        "Projection": {
     *          "NonKeyAttributes": [ "myattribute" ]
     *          ...
     *        }
     *        ...
     *      },
     *      {
     *        "ProjectionType": "INCLUDE"
     *        ...
     *      },
     *    ]
     *    ...
     * }
     * </pre></blockquote>
     * <p>
     * @param path <ul><li>The path of the property, you can use dot notation to override values in complex types.</li></ul> This parameter is required.
     * @param value <ul><li>The value.</li></ul> This parameter is required.
     */
    public void addOverride(final @org.jetbrains.annotations.NotNull java.lang.String path, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        software.amazon.jsii.Kernel.call(this, "addOverride", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(path, "path is required"), value });
    }

    /**
     * Adds an override that deletes the value of a property from the resource definition.
     * <p>
     * @param propertyPath The path to the property. This parameter is required.
     */
    public void addPropertyDeletionOverride(final @org.jetbrains.annotations.NotNull java.lang.String propertyPath) {
        software.amazon.jsii.Kernel.call(this, "addPropertyDeletionOverride", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(propertyPath, "propertyPath is required") });
    }

    /**
     * Adds an override to a resource property.
     * <p>
     * Syntactic sugar for <code>addOverride("Properties.&lt;...&gt;", value)</code>.
     * <p>
     * @param propertyPath The path of the property. This parameter is required.
     * @param value The value. This parameter is required.
     */
    public void addPropertyOverride(final @org.jetbrains.annotations.NotNull java.lang.String propertyPath, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        software.amazon.jsii.Kernel.call(this, "addPropertyOverride", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(propertyPath, "propertyPath is required"), value });
    }

    public void addRosDependency(final @org.jetbrains.annotations.NotNull java.lang.String target) {
        software.amazon.jsii.Kernel.call(this, "addRosDependency", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(target, "target is required") });
    }

    /**
     * Sets the deletion policy of the resource based on the removal policy specified.
     * <p>
     * @param policy
     * @param options
     */
    public void applyRemovalPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RemovalPolicy policy, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RemovalPolicyOptions options) {
        software.amazon.jsii.Kernel.call(this, "applyRemovalPolicy", software.amazon.jsii.NativeType.VOID, new Object[] { policy, options });
    }

    /**
     * Sets the deletion policy of the resource based on the removal policy specified.
     * <p>
     * @param policy
     */
    public void applyRemovalPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RemovalPolicy policy) {
        software.amazon.jsii.Kernel.call(this, "applyRemovalPolicy", software.amazon.jsii.NativeType.VOID, new Object[] { policy });
    }

    /**
     * Sets the deletion policy of the resource based on the removal policy specified.
     */
    public void applyRemovalPolicy() {
        software.amazon.jsii.Kernel.call(this, "applyRemovalPolicy", software.amazon.jsii.NativeType.VOID);
    }

    /**
     * Returns a token for an runtime attribute of this resource.
     * <p>
     * Ideally, use generated attribute accessors (e.g. <code>resource.arn</code>), but this can be used for future compatibility
     * in case there is no generated attribute.
     * <p>
     * @param attributeName The name of the attribute. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Reference getAtt(final @org.jetbrains.annotations.NotNull java.lang.String attributeName) {
        return software.amazon.jsii.Kernel.call(this, "getAtt", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Reference.class), new Object[] { java.util.Objects.requireNonNull(attributeName, "attributeName is required") });
    }

    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * Returns a string representation of this construct.
     * <p>
     * @return a string representation of this resource
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.String toString() {
        return software.amazon.jsii.Kernel.call(this, "toString", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void validateProperties(final @org.jetbrains.annotations.NotNull java.lang.Object _properties) {
        software.amazon.jsii.Kernel.call(this, "validateProperties", software.amazon.jsii.NativeType.VOID, new Object[] { _properties });
    }

    /**
     * Options for this resource, such as condition, update policy etc.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IRosResourceOptions getRosOptions() {
        return software.amazon.jsii.Kernel.get(this, "rosOptions", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IRosResourceOptions.class));
    }

    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     * ROS resource type.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getRosResourceType() {
        return software.amazon.jsii.Kernel.get(this, "rosResourceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Return properties modified after initiation.
     * <p>
     * Resources that expose mutable properties should override this function to
     * collect and return the properties object for this resource.
     */
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getUpdatedProperites() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "updatedProperites", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.RosResource}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.RosResource> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final com.aliyun.ros.cdk.core.RosResourceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
            this.props = new com.aliyun.ros.cdk.core.RosResourceProps.Builder();
        }

        /**
         * ROS template resource type (e.g. <code>ALIYUN::ECS::Instance</code>).
         * <p>
         * @return {@code this}
         * @param type ROS template resource type (e.g. <code>ALIYUN::ECS::Instance</code>). This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }

        /**
         * Resource properties.
         * <p>
         * Default: - No resource properties.
         * <p>
         * @return {@code this}
         * @param properties Resource properties. This parameter is required.
         */
        public Builder properties(final java.util.Map<java.lang.String, ? extends java.lang.Object> properties) {
            this.props.properties(properties);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.core.RosResource}.
         */
        @Override
        public com.aliyun.ros.cdk.core.RosResource build() {
            return new com.aliyun.ros.cdk.core.RosResource(
                this.scope,
                this.id,
                this.props.build()
            );
        }
    }
}
