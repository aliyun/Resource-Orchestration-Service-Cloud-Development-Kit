package com.aliyun.ros.cdk.oos;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OOS::Parameter</code>, which is used to create a common parameter.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:41.043Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.Parameter")
public class Parameter extends com.aliyun.ros.cdk.core.Resource {

    protected Parameter(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Parameter(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Parameter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ParameterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Parameter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ParameterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Name: The Name of the parameter.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Value: The Value of the parameter.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrValue() {
        return software.amazon.jsii.Kernel.get(this, "attrValue", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ParameterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.ParameterProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ParameterProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.Parameter}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.Parameter> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.oos.ParameterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.ParameterProps.Builder();
        }

        /**
         * Property name: The name of the parameter.
         * <p>
         * The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
         * It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the parameter. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the parameter.
         * <p>
         * The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
         * It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the parameter. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property type: The data type of the common parameter.
         * <p>
         * Valid values: String and StringList.
         * <p>
         * @return {@code this}
         * @param type Property type: The data type of the common parameter. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The data type of the common parameter.
         * <p>
         * Valid values: String and StringList.
         * <p>
         * @return {@code this}
         * @param type Property type: The data type of the common parameter. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property value: The value of the parameter.
         * <p>
         * The value must be 1 to 4096 characters in length.
         * <p>
         * @return {@code this}
         * @param value Property value: The value of the parameter. This parameter is required.
         */
        public Builder value(final java.lang.String value) {
            this.props.value(value);
            return this;
        }
        /**
         * Property value: The value of the parameter.
         * <p>
         * The value must be 1 to 4096 characters in length.
         * <p>
         * @return {@code this}
         * @param value Property value: The value of the parameter. This parameter is required.
         */
        public Builder value(final com.aliyun.ros.cdk.core.IResolvable value) {
            this.props.value(value);
            return this;
        }

        /**
         * Property constraints: The constraints of the parameter.
         * <p>
         * By default, this parameter is null. Valid values:
         * AllowedValues: The value that is allowed for the parameter. It must be an array string.
         * AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
         * MinLength: The minimum length of the parameter.
         * MaxLength: The maximum length of the parameter.
         * <p>
         * @return {@code this}
         * @param constraints Property constraints: The constraints of the parameter. This parameter is required.
         */
        public Builder constraints(final java.lang.String constraints) {
            this.props.constraints(constraints);
            return this;
        }
        /**
         * Property constraints: The constraints of the parameter.
         * <p>
         * By default, this parameter is null. Valid values:
         * AllowedValues: The value that is allowed for the parameter. It must be an array string.
         * AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
         * MinLength: The minimum length of the parameter.
         * MaxLength: The maximum length of the parameter.
         * <p>
         * @return {@code this}
         * @param constraints Property constraints: The constraints of the parameter. This parameter is required.
         */
        public Builder constraints(final com.aliyun.ros.cdk.core.IResolvable constraints) {
            this.props.constraints(constraints);
            return this;
        }

        /**
         * Property description: The description of the parameter.
         * <p>
         * The description must be 1 to 200 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the parameter. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the parameter.
         * <p>
         * The description must be 1 to 200 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the parameter. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.Parameter}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.Parameter build() {
            return new com.aliyun.ros.cdk.oos.Parameter(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
