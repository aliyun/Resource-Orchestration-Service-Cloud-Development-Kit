package com.aliyun.ros.cdk.ice;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ICE::InsertMediaToSearchLib</code>, which is used to add a media asset to a search library.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:17.547Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.RosInsertMediaToSearchLib")
public class RosInsertMediaToSearchLib extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInsertMediaToSearchLib(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInsertMediaToSearchLib(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ice.RosInsertMediaToSearchLib.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInsertMediaToSearchLib(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.RosInsertMediaToSearchLibProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMediaId() {
        return software.amazon.jsii.Kernel.get(this, "attrMediaId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInput() {
        return software.amazon.jsii.Kernel.get(this, "input", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInput(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "input", java.util.Objects.requireNonNull(value, "input is required"));
    }

    /**
     */
    public void setInput(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "input", java.util.Objects.requireNonNull(value, "input is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMediaId() {
        return software.amazon.jsii.Kernel.get(this, "mediaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMediaId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mediaId", value);
    }

    /**
     */
    public void setMediaId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mediaId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMediaType() {
        return software.amazon.jsii.Kernel.get(this, "mediaType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMediaType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mediaType", value);
    }

    /**
     */
    public void setMediaType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mediaType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMsgBody() {
        return software.amazon.jsii.Kernel.get(this, "msgBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMsgBody(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "msgBody", value);
    }

    /**
     */
    public void setMsgBody(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "msgBody", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSearchLibName() {
        return software.amazon.jsii.Kernel.get(this, "searchLibName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSearchLibName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "searchLibName", value);
    }

    /**
     */
    public void setSearchLibName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "searchLibName", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ice.RosInsertMediaToSearchLib}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ice.RosInsertMediaToSearchLib> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ice.RosInsertMediaToSearchLibProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ice.RosInsertMediaToSearchLibProps.Builder();
        }

        /**
         * @return {@code this}
         * @param input This parameter is required.
         */
        public Builder input(final java.lang.String input) {
            this.props.input(input);
            return this;
        }
        /**
         * @return {@code this}
         * @param input This parameter is required.
         */
        public Builder input(final com.aliyun.ros.cdk.core.IResolvable input) {
            this.props.input(input);
            return this;
        }

        /**
         * @return {@code this}
         * @param mediaId This parameter is required.
         */
        public Builder mediaId(final java.lang.String mediaId) {
            this.props.mediaId(mediaId);
            return this;
        }
        /**
         * @return {@code this}
         * @param mediaId This parameter is required.
         */
        public Builder mediaId(final com.aliyun.ros.cdk.core.IResolvable mediaId) {
            this.props.mediaId(mediaId);
            return this;
        }

        /**
         * @return {@code this}
         * @param mediaType This parameter is required.
         */
        public Builder mediaType(final java.lang.String mediaType) {
            this.props.mediaType(mediaType);
            return this;
        }
        /**
         * @return {@code this}
         * @param mediaType This parameter is required.
         */
        public Builder mediaType(final com.aliyun.ros.cdk.core.IResolvable mediaType) {
            this.props.mediaType(mediaType);
            return this;
        }

        /**
         * @return {@code this}
         * @param msgBody This parameter is required.
         */
        public Builder msgBody(final com.aliyun.ros.cdk.core.IResolvable msgBody) {
            this.props.msgBody(msgBody);
            return this;
        }
        /**
         * @return {@code this}
         * @param msgBody This parameter is required.
         */
        public Builder msgBody(final java.util.Map<java.lang.String, ? extends java.lang.Object> msgBody) {
            this.props.msgBody(msgBody);
            return this;
        }

        /**
         * @return {@code this}
         * @param searchLibName This parameter is required.
         */
        public Builder searchLibName(final java.lang.String searchLibName) {
            this.props.searchLibName(searchLibName);
            return this;
        }
        /**
         * @return {@code this}
         * @param searchLibName This parameter is required.
         */
        public Builder searchLibName(final com.aliyun.ros.cdk.core.IResolvable searchLibName) {
            this.props.searchLibName(searchLibName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ice.RosInsertMediaToSearchLib}.
         */
        @Override
        public com.aliyun.ros.cdk.ice.RosInsertMediaToSearchLib build() {
            return new com.aliyun.ros.cdk.ice.RosInsertMediaToSearchLib(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
