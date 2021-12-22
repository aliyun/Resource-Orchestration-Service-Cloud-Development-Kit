package com.aliyun.ros.cdk.core;

/**
 * A ROS parameter.
 * <p>
 * Parameters enable you to input custom values to your template each time you create or
 * update a stack.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:56.525Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosParameter")
public class RosParameter extends com.aliyun.ros.cdk.core.RosElement {

    protected RosParameter(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosParameter(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ASSOCIATION_PROPERTY_ALLOWED_VALUES = java.util.Collections.unmodifiableList(software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.class, "ASSOCIATION_PROPERTY_ALLOWED_VALUES", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
        TYPE_ALLOWED_VALUES = java.util.Collections.unmodifiableList(software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.class, "TYPE_ALLOWED_VALUES", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
    }

    public RosParameter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosParameterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    public RosParameter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    public @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext _context) {
        return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(_context, "_context is required") });
    }

    public void validateProperties(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosParameterProps props) {
        software.amazon.jsii.Kernel.call(this, "validateProperties", software.amazon.jsii.NativeType.VOID, new Object[] { props });
    }

    public void validateProperties() {
        software.amazon.jsii.Kernel.call(this, "validateProperties", software.amazon.jsii.NativeType.VOID);
    }

    public final static java.util.List<java.lang.String> ASSOCIATION_PROPERTY_ALLOWED_VALUES;

    public final static java.util.List<java.lang.String> TYPE_ALLOWED_VALUES;

    /**
     * Indicates if this parameter is configured with "NoEcho" enabled.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getNoEcho() {
        return software.amazon.jsii.Kernel.get(this, "noEcho", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * The parameter value as a Token.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getValue() {
        return software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * The parameter value, if it represents a string.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getValueAsAny() {
        return software.amazon.jsii.Kernel.get(this, "valueAsAny", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * The parameter value, if it represents a string.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getValueAsBoolean() {
        return software.amazon.jsii.Kernel.get(this, "valueAsBoolean", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * The parameter value, if it represents a string list.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getValueAsList() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "valueAsList", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
    }

    /**
     * The parameter value, if it represents a number.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getValueAsNumber() {
        return software.amazon.jsii.Kernel.get(this, "valueAsNumber", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     * The parameter value, if it represents a string.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getValueAsString() {
        return software.amazon.jsii.Kernel.get(this, "valueAsString", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosParameter.AssociationProperty")
    public static class AssociationProperty extends software.amazon.jsii.JsiiObject {

        protected AssociationProperty(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        protected AssociationProperty(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
            super(initializationMode);
        }

        static {
            ECS_INSTANCE_TYPE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_INSTANCE_TYPE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ECS_KEY_PAIR_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ECS_KEY_PAIR_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            IMAGE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "IMAGE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RAM_ROLE = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RAM_ROLE", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            RAM_USER = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "RAM_USER", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            SECURITY_GROUP_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "SECURITY_GROUP_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VPC_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VPC_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            VSWITCH_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "VSWITCH_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            ZONE_ID = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosParameter.AssociationProperty.class, "ZONE_ID", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        public AssociationProperty() {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
        }

        public final static java.lang.String ECS_INSTANCE_TYPE;

        public final static java.lang.String ECS_KEY_PAIR_NAME;

        public final static java.lang.String IMAGE_ID;

        public final static java.lang.String RAM_ROLE;

        public final static java.lang.String RAM_USER;

        public final static java.lang.String SECURITY_GROUP_ID;

        public final static java.lang.String VPC_ID;

        public final static java.lang.String VSWITCH_ID;

        public final static java.lang.String ZONE_ID;
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.RosParameter}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.RosParameter> {
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
        private com.aliyun.ros.cdk.core.RosParameterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
        }

        /**
         * @return {@code this}
         * @param allowedPattern This parameter is required.
         */
        public Builder allowedPattern(final java.lang.String allowedPattern) {
            this.props().allowedPattern(allowedPattern);
            return this;
        }

        /**
         * @return {@code this}
         * @param allowedValues This parameter is required.
         */
        public Builder allowedValues(final java.util.List<? extends java.lang.Object> allowedValues) {
            this.props().allowedValues(allowedValues);
            return this;
        }

        /**
         * @return {@code this}
         * @param associationProperty This parameter is required.
         */
        public Builder associationProperty(final java.lang.String associationProperty) {
            this.props().associationProperty(associationProperty);
            return this;
        }

        /**
         * @return {@code this}
         * @param associationPropertyMetadata This parameter is required.
         */
        public Builder associationPropertyMetadata(final java.util.Map<java.lang.String, ? extends java.lang.Object> associationPropertyMetadata) {
            this.props().associationPropertyMetadata(associationPropertyMetadata);
            return this;
        }

        /**
         * @return {@code this}
         * @param confirm This parameter is required.
         */
        public Builder confirm(final java.lang.Boolean confirm) {
            this.props().confirm(confirm);
            return this;
        }

        /**
         * @return {@code this}
         * @param constraintDescription This parameter is required.
         */
        public Builder constraintDescription(final java.lang.String constraintDescription) {
            this.props().constraintDescription(constraintDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param constraintDescription This parameter is required.
         */
        public Builder constraintDescription(final java.util.Map<java.lang.String, java.lang.String> constraintDescription) {
            this.props().constraintDescription(constraintDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultValue This parameter is required.
         */
        public Builder defaultValue(final java.lang.Object defaultValue) {
            this.props().defaultValue(defaultValue);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.util.Map<java.lang.String, java.lang.String> description) {
            this.props().description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param label This parameter is required.
         */
        public Builder label(final java.lang.String label) {
            this.props().label(label);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxLength This parameter is required.
         */
        public Builder maxLength(final java.lang.Number maxLength) {
            this.props().maxLength(maxLength);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxValue This parameter is required.
         */
        public Builder maxValue(final java.lang.Number maxValue) {
            this.props().maxValue(maxValue);
            return this;
        }

        /**
         * @return {@code this}
         * @param minLength This parameter is required.
         */
        public Builder minLength(final java.lang.Number minLength) {
            this.props().minLength(minLength);
            return this;
        }

        /**
         * @return {@code this}
         * @param minValue This parameter is required.
         */
        public Builder minValue(final java.lang.Number minValue) {
            this.props().minValue(minValue);
            return this;
        }

        /**
         * @return {@code this}
         * @param noEcho This parameter is required.
         */
        public Builder noEcho(final java.lang.Boolean noEcho) {
            this.props().noEcho(noEcho);
            return this;
        }

        /**
         * @return {@code this}
         * @param textArea This parameter is required.
         */
        public Builder textArea(final java.lang.Boolean textArea) {
            this.props().textArea(textArea);
            return this;
        }

        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.RosParameterType type) {
            this.props().type(type);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.core.RosParameter}.
         */
        @Override
        public com.aliyun.ros.cdk.core.RosParameter build() {
            return new com.aliyun.ros.cdk.core.RosParameter(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null
            );
        }

        private com.aliyun.ros.cdk.core.RosParameterProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.core.RosParameterProps.Builder();
            }
            return this.props;
        }
    }
}
