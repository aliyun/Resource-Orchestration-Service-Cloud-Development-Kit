package com.aliyun.ros.cdk.cms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CMS::SlsGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:13.283Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosSlsGroup")
public class RosSlsGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSlsGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSlsGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosSlsGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSlsGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosSlsGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSlsGroupConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrSlsGroupConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSlsGroupDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrSlsGroupDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSlsGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrSlsGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getSlsGroupConfig() {
        return software.amazon.jsii.Kernel.get(this, "slsGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlsGroupConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slsGroupConfig", java.util.Objects.requireNonNull(value, "slsGroupConfig is required"));
    }

    /**
     */
    public void setSlsGroupConfig(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cms.RosSlsGroup.SlsGroupConfigProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cms.RosSlsGroup.SlsGroupConfigProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "slsGroupConfig", java.util.Objects.requireNonNull(value, "slsGroupConfig is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSlsGroupName() {
        return software.amazon.jsii.Kernel.get(this, "slsGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlsGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "slsGroupName", java.util.Objects.requireNonNull(value, "slsGroupName is required"));
    }

    /**
     */
    public void setSlsGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slsGroupName", java.util.Objects.requireNonNull(value, "slsGroupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSlsGroupDescription() {
        return software.amazon.jsii.Kernel.get(this, "slsGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlsGroupDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "slsGroupDescription", value);
    }

    /**
     */
    public void setSlsGroupDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slsGroupDescription", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosSlsGroup.SlsGroupConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(SlsGroupConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SlsGroupConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSlsLogstore();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSlsProject();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSlsRegion();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlsUserId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SlsGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SlsGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SlsGroupConfigProperty> {
            java.lang.Object slsLogstore;
            java.lang.Object slsProject;
            java.lang.Object slsRegion;
            java.lang.Object slsUserId;

            /**
             * Sets the value of {@link SlsGroupConfigProperty#getSlsLogstore}
             * @param slsLogstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsLogstore(java.lang.String slsLogstore) {
                this.slsLogstore = slsLogstore;
                return this;
            }

            /**
             * Sets the value of {@link SlsGroupConfigProperty#getSlsLogstore}
             * @param slsLogstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsLogstore(com.aliyun.ros.cdk.core.IResolvable slsLogstore) {
                this.slsLogstore = slsLogstore;
                return this;
            }

            /**
             * Sets the value of {@link SlsGroupConfigProperty#getSlsProject}
             * @param slsProject the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsProject(java.lang.String slsProject) {
                this.slsProject = slsProject;
                return this;
            }

            /**
             * Sets the value of {@link SlsGroupConfigProperty#getSlsProject}
             * @param slsProject the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsProject(com.aliyun.ros.cdk.core.IResolvable slsProject) {
                this.slsProject = slsProject;
                return this;
            }

            /**
             * Sets the value of {@link SlsGroupConfigProperty#getSlsRegion}
             * @param slsRegion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsRegion(java.lang.String slsRegion) {
                this.slsRegion = slsRegion;
                return this;
            }

            /**
             * Sets the value of {@link SlsGroupConfigProperty#getSlsRegion}
             * @param slsRegion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsRegion(com.aliyun.ros.cdk.core.IResolvable slsRegion) {
                this.slsRegion = slsRegion;
                return this;
            }

            /**
             * Sets the value of {@link SlsGroupConfigProperty#getSlsUserId}
             * @param slsUserId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsUserId(java.lang.String slsUserId) {
                this.slsUserId = slsUserId;
                return this;
            }

            /**
             * Sets the value of {@link SlsGroupConfigProperty#getSlsUserId}
             * @param slsUserId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsUserId(com.aliyun.ros.cdk.core.IResolvable slsUserId) {
                this.slsUserId = slsUserId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SlsGroupConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SlsGroupConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SlsGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SlsGroupConfigProperty {
            private final java.lang.Object slsLogstore;
            private final java.lang.Object slsProject;
            private final java.lang.Object slsRegion;
            private final java.lang.Object slsUserId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.slsLogstore = software.amazon.jsii.Kernel.get(this, "slsLogstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slsProject = software.amazon.jsii.Kernel.get(this, "slsProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slsRegion = software.amazon.jsii.Kernel.get(this, "slsRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slsUserId = software.amazon.jsii.Kernel.get(this, "slsUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.slsLogstore = java.util.Objects.requireNonNull(builder.slsLogstore, "slsLogstore is required");
                this.slsProject = java.util.Objects.requireNonNull(builder.slsProject, "slsProject is required");
                this.slsRegion = java.util.Objects.requireNonNull(builder.slsRegion, "slsRegion is required");
                this.slsUserId = builder.slsUserId;
            }

            @Override
            public final java.lang.Object getSlsLogstore() {
                return this.slsLogstore;
            }

            @Override
            public final java.lang.Object getSlsProject() {
                return this.slsProject;
            }

            @Override
            public final java.lang.Object getSlsRegion() {
                return this.slsRegion;
            }

            @Override
            public final java.lang.Object getSlsUserId() {
                return this.slsUserId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("slsLogstore", om.valueToTree(this.getSlsLogstore()));
                data.set("slsProject", om.valueToTree(this.getSlsProject()));
                data.set("slsRegion", om.valueToTree(this.getSlsRegion()));
                if (this.getSlsUserId() != null) {
                    data.set("slsUserId", om.valueToTree(this.getSlsUserId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosSlsGroup.SlsGroupConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SlsGroupConfigProperty.Jsii$Proxy that = (SlsGroupConfigProperty.Jsii$Proxy) o;

                if (!slsLogstore.equals(that.slsLogstore)) return false;
                if (!slsProject.equals(that.slsProject)) return false;
                if (!slsRegion.equals(that.slsRegion)) return false;
                return this.slsUserId != null ? this.slsUserId.equals(that.slsUserId) : that.slsUserId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.slsLogstore.hashCode();
                result = 31 * result + (this.slsProject.hashCode());
                result = 31 * result + (this.slsRegion.hashCode());
                result = 31 * result + (this.slsUserId != null ? this.slsUserId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosSlsGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosSlsGroup> {
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
        private final com.aliyun.ros.cdk.cms.RosSlsGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosSlsGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param slsGroupConfig This parameter is required.
         */
        public Builder slsGroupConfig(final com.aliyun.ros.cdk.core.IResolvable slsGroupConfig) {
            this.props.slsGroupConfig(slsGroupConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param slsGroupConfig This parameter is required.
         */
        public Builder slsGroupConfig(final java.util.List<? extends java.lang.Object> slsGroupConfig) {
            this.props.slsGroupConfig(slsGroupConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsGroupName This parameter is required.
         */
        public Builder slsGroupName(final java.lang.String slsGroupName) {
            this.props.slsGroupName(slsGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param slsGroupName This parameter is required.
         */
        public Builder slsGroupName(final com.aliyun.ros.cdk.core.IResolvable slsGroupName) {
            this.props.slsGroupName(slsGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsGroupDescription This parameter is required.
         */
        public Builder slsGroupDescription(final java.lang.String slsGroupDescription) {
            this.props.slsGroupDescription(slsGroupDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param slsGroupDescription This parameter is required.
         */
        public Builder slsGroupDescription(final com.aliyun.ros.cdk.core.IResolvable slsGroupDescription) {
            this.props.slsGroupDescription(slsGroupDescription);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.RosSlsGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosSlsGroup build() {
            return new com.aliyun.ros.cdk.cms.RosSlsGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
