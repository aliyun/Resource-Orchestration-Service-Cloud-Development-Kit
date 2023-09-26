package com.aliyun.ros.cdk.ess;

/**
 * A ROS template type:  <code>ALIYUN::ESS::ScalingGroupEnable</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.106Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingGroupEnable")
public class RosScalingGroupEnable extends com.aliyun.ros.cdk.core.RosResource {

    protected RosScalingGroupEnable(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosScalingGroupEnable(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ess.RosScalingGroupEnable.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::ESS::ScalingGroupEnable</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosScalingGroupEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.RosScalingGroupEnableProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLifecycleState() {
        return software.amazon.jsii.Kernel.get(this, "attrLifecycleState", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingInstanceDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingInstanceDetails", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleArisExecuteErrorInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteErrorInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleArisExecuteResultInstancesAdded() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultInstancesAdded", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleArisExecuteResultInstancesRemoved() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultInstancesRemoved", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleArisExecuteResultNumberOfAddedInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultNumberOfAddedInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", java.util.Objects.requireNonNull(value, "scalingGroupId is required"));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", java.util.Objects.requireNonNull(value, "scalingGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAttachOptions() {
        return software.amazon.jsii.Kernel.get(this, "attachOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAttachOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "attachOptions", value);
    }

    /**
     */
    public void setAttachOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ess.RosScalingGroupEnable.AttachOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "attachOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDetachOptions() {
        return software.amazon.jsii.Kernel.get(this, "detachOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDetachOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "detachOptions", value);
    }

    /**
     */
    public void setDetachOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ess.RosScalingGroupEnable.DetachOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "detachOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "instanceIds", value);
    }

    /**
     */
    public void setInstanceIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemoveInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "removeInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemoveInstanceIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "removeInstanceIds", value);
    }

    /**
     */
    public void setRemoveInstanceIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "removeInstanceIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingConfigurationId() {
        return software.amazon.jsii.Kernel.get(this, "scalingConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingConfigurationId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingConfigurationId", value);
    }

    /**
     */
    public void setScalingConfigurationId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingConfigurationId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleAris() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleAris", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleAris(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "scalingRuleAris", value);
    }

    /**
     */
    public void setScalingRuleAris(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleAris", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleArisExecuteVersion() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleArisExecuteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleArisExecuteVersion(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleArisExecuteVersion", value);
    }

    /**
     */
    public void setScalingRuleArisExecuteVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleArisExecuteVersion", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingGroupEnable.AttachOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(AttachOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AttachOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEntrusted() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLifecycleHook() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AttachOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AttachOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AttachOptionsProperty> {
            java.lang.Object entrusted;
            java.lang.Object lifecycleHook;

            /**
             * Sets the value of {@link AttachOptionsProperty#getEntrusted}
             * @param entrusted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder entrusted(java.lang.Boolean entrusted) {
                this.entrusted = entrusted;
                return this;
            }

            /**
             * Sets the value of {@link AttachOptionsProperty#getEntrusted}
             * @param entrusted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder entrusted(com.aliyun.ros.cdk.core.IResolvable entrusted) {
                this.entrusted = entrusted;
                return this;
            }

            /**
             * Sets the value of {@link AttachOptionsProperty#getLifecycleHook}
             * @param lifecycleHook the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder lifecycleHook(java.lang.Boolean lifecycleHook) {
                this.lifecycleHook = lifecycleHook;
                return this;
            }

            /**
             * Sets the value of {@link AttachOptionsProperty#getLifecycleHook}
             * @param lifecycleHook the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder lifecycleHook(com.aliyun.ros.cdk.core.IResolvable lifecycleHook) {
                this.lifecycleHook = lifecycleHook;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AttachOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AttachOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AttachOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AttachOptionsProperty {
            private final java.lang.Object entrusted;
            private final java.lang.Object lifecycleHook;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.entrusted = software.amazon.jsii.Kernel.get(this, "entrusted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.lifecycleHook = software.amazon.jsii.Kernel.get(this, "lifecycleHook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.entrusted = builder.entrusted;
                this.lifecycleHook = builder.lifecycleHook;
            }

            @Override
            public final java.lang.Object getEntrusted() {
                return this.entrusted;
            }

            @Override
            public final java.lang.Object getLifecycleHook() {
                return this.lifecycleHook;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEntrusted() != null) {
                    data.set("entrusted", om.valueToTree(this.getEntrusted()));
                }
                if (this.getLifecycleHook() != null) {
                    data.set("lifecycleHook", om.valueToTree(this.getLifecycleHook()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosScalingGroupEnable.AttachOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AttachOptionsProperty.Jsii$Proxy that = (AttachOptionsProperty.Jsii$Proxy) o;

                if (this.entrusted != null ? !this.entrusted.equals(that.entrusted) : that.entrusted != null) return false;
                return this.lifecycleHook != null ? this.lifecycleHook.equals(that.lifecycleHook) : that.lifecycleHook == null;
            }

            @Override
            public final int hashCode() {
                int result = this.entrusted != null ? this.entrusted.hashCode() : 0;
                result = 31 * result + (this.lifecycleHook != null ? this.lifecycleHook.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingGroupEnable.DetachOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(DetachOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DetachOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDecreaseDesiredCapacity() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDetachOption() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLifecycleHook() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DetachOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DetachOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DetachOptionsProperty> {
            java.lang.Object decreaseDesiredCapacity;
            java.lang.Object detachOption;
            java.lang.Object lifecycleHook;

            /**
             * Sets the value of {@link DetachOptionsProperty#getDecreaseDesiredCapacity}
             * @param decreaseDesiredCapacity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder decreaseDesiredCapacity(java.lang.Boolean decreaseDesiredCapacity) {
                this.decreaseDesiredCapacity = decreaseDesiredCapacity;
                return this;
            }

            /**
             * Sets the value of {@link DetachOptionsProperty#getDecreaseDesiredCapacity}
             * @param decreaseDesiredCapacity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder decreaseDesiredCapacity(com.aliyun.ros.cdk.core.IResolvable decreaseDesiredCapacity) {
                this.decreaseDesiredCapacity = decreaseDesiredCapacity;
                return this;
            }

            /**
             * Sets the value of {@link DetachOptionsProperty#getDetachOption}
             * @param detachOption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder detachOption(java.lang.String detachOption) {
                this.detachOption = detachOption;
                return this;
            }

            /**
             * Sets the value of {@link DetachOptionsProperty#getDetachOption}
             * @param detachOption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder detachOption(com.aliyun.ros.cdk.core.IResolvable detachOption) {
                this.detachOption = detachOption;
                return this;
            }

            /**
             * Sets the value of {@link DetachOptionsProperty#getLifecycleHook}
             * @param lifecycleHook the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder lifecycleHook(java.lang.Boolean lifecycleHook) {
                this.lifecycleHook = lifecycleHook;
                return this;
            }

            /**
             * Sets the value of {@link DetachOptionsProperty#getLifecycleHook}
             * @param lifecycleHook the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder lifecycleHook(com.aliyun.ros.cdk.core.IResolvable lifecycleHook) {
                this.lifecycleHook = lifecycleHook;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DetachOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DetachOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DetachOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DetachOptionsProperty {
            private final java.lang.Object decreaseDesiredCapacity;
            private final java.lang.Object detachOption;
            private final java.lang.Object lifecycleHook;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.decreaseDesiredCapacity = software.amazon.jsii.Kernel.get(this, "decreaseDesiredCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.detachOption = software.amazon.jsii.Kernel.get(this, "detachOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.lifecycleHook = software.amazon.jsii.Kernel.get(this, "lifecycleHook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.decreaseDesiredCapacity = builder.decreaseDesiredCapacity;
                this.detachOption = builder.detachOption;
                this.lifecycleHook = builder.lifecycleHook;
            }

            @Override
            public final java.lang.Object getDecreaseDesiredCapacity() {
                return this.decreaseDesiredCapacity;
            }

            @Override
            public final java.lang.Object getDetachOption() {
                return this.detachOption;
            }

            @Override
            public final java.lang.Object getLifecycleHook() {
                return this.lifecycleHook;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDecreaseDesiredCapacity() != null) {
                    data.set("decreaseDesiredCapacity", om.valueToTree(this.getDecreaseDesiredCapacity()));
                }
                if (this.getDetachOption() != null) {
                    data.set("detachOption", om.valueToTree(this.getDetachOption()));
                }
                if (this.getLifecycleHook() != null) {
                    data.set("lifecycleHook", om.valueToTree(this.getLifecycleHook()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosScalingGroupEnable.DetachOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DetachOptionsProperty.Jsii$Proxy that = (DetachOptionsProperty.Jsii$Proxy) o;

                if (this.decreaseDesiredCapacity != null ? !this.decreaseDesiredCapacity.equals(that.decreaseDesiredCapacity) : that.decreaseDesiredCapacity != null) return false;
                if (this.detachOption != null ? !this.detachOption.equals(that.detachOption) : that.detachOption != null) return false;
                return this.lifecycleHook != null ? this.lifecycleHook.equals(that.lifecycleHook) : that.lifecycleHook == null;
            }

            @Override
            public final int hashCode() {
                int result = this.decreaseDesiredCapacity != null ? this.decreaseDesiredCapacity.hashCode() : 0;
                result = 31 * result + (this.detachOption != null ? this.detachOption.hashCode() : 0);
                result = 31 * result + (this.lifecycleHook != null ? this.lifecycleHook.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.RosScalingGroupEnable}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.RosScalingGroupEnable> {
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
        private final com.aliyun.ros.cdk.ess.RosScalingGroupEnableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.RosScalingGroupEnableProps.Builder();
        }

        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param attachOptions This parameter is required.
         */
        public Builder attachOptions(final com.aliyun.ros.cdk.core.IResolvable attachOptions) {
            this.props.attachOptions(attachOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param attachOptions This parameter is required.
         */
        public Builder attachOptions(final com.aliyun.ros.cdk.ess.RosScalingGroupEnable.AttachOptionsProperty attachOptions) {
            this.props.attachOptions(attachOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param detachOptions This parameter is required.
         */
        public Builder detachOptions(final com.aliyun.ros.cdk.core.IResolvable detachOptions) {
            this.props.detachOptions(detachOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param detachOptions This parameter is required.
         */
        public Builder detachOptions(final com.aliyun.ros.cdk.ess.RosScalingGroupEnable.DetachOptionsProperty detachOptions) {
            this.props.detachOptions(detachOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceIds This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceIds This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param removeInstanceIds This parameter is required.
         */
        public Builder removeInstanceIds(final java.util.List<? extends java.lang.Object> removeInstanceIds) {
            this.props.removeInstanceIds(removeInstanceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param removeInstanceIds This parameter is required.
         */
        public Builder removeInstanceIds(final com.aliyun.ros.cdk.core.IResolvable removeInstanceIds) {
            this.props.removeInstanceIds(removeInstanceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingConfigurationId This parameter is required.
         */
        public Builder scalingConfigurationId(final java.lang.String scalingConfigurationId) {
            this.props.scalingConfigurationId(scalingConfigurationId);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingConfigurationId This parameter is required.
         */
        public Builder scalingConfigurationId(final com.aliyun.ros.cdk.core.IResolvable scalingConfigurationId) {
            this.props.scalingConfigurationId(scalingConfigurationId);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleAris This parameter is required.
         */
        public Builder scalingRuleAris(final java.util.List<? extends java.lang.Object> scalingRuleAris) {
            this.props.scalingRuleAris(scalingRuleAris);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleAris This parameter is required.
         */
        public Builder scalingRuleAris(final com.aliyun.ros.cdk.core.IResolvable scalingRuleAris) {
            this.props.scalingRuleAris(scalingRuleAris);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleArisExecuteVersion This parameter is required.
         */
        public Builder scalingRuleArisExecuteVersion(final java.lang.Number scalingRuleArisExecuteVersion) {
            this.props.scalingRuleArisExecuteVersion(scalingRuleArisExecuteVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleArisExecuteVersion This parameter is required.
         */
        public Builder scalingRuleArisExecuteVersion(final com.aliyun.ros.cdk.core.IResolvable scalingRuleArisExecuteVersion) {
            this.props.scalingRuleArisExecuteVersion(scalingRuleArisExecuteVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.RosScalingGroupEnable}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.RosScalingGroupEnable build() {
            return new com.aliyun.ros.cdk.ess.RosScalingGroupEnable(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
