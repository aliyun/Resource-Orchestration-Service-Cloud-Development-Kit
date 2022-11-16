package com.aliyun.ros.cdk.hbr;

/**
 * A ROS template type:  `ALIYUN::HBR::DbPlan`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:10.265Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosDbPlan")
public class RosDbPlan extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDbPlan(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDbPlan(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.hbr.RosDbPlan.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::HBR::DbPlan`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDbPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.RosDbPlanProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContinuousPlan() {
        return software.amazon.jsii.Kernel.get(this, "attrContinuousPlan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContinuousUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrContinuousUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCumulativePlan() {
        return software.amazon.jsii.Kernel.get(this, "attrCumulativePlan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCumulativeUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrCumulativeUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbPlanName() {
        return software.amazon.jsii.Kernel.get(this, "attrDbPlanName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFullPlan() {
        return software.amazon.jsii.Kernel.get(this, "attrFullPlan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFullUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrFullUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrHostUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIncPlan() {
        return software.amazon.jsii.Kernel.get(this, "attrIncPlan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIncUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrIncUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogPlan() {
        return software.amazon.jsii.Kernel.get(this, "attrLogPlan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrLogUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaxRateLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxRateLimit", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaxRetrySeconds() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxRetrySeconds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOptions() {
        return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPlanId() {
        return software.amazon.jsii.Kernel.get(this, "attrPlanId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTarget() {
        return software.amazon.jsii.Kernel.get(this, "attrTarget", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVaultId() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbPlanName() {
        return software.amazon.jsii.Kernel.get(this, "dbPlanName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbPlanName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbPlanName", java.util.Objects.requireNonNull(value, "dbPlanName is required"));
    }

    /**
     */
    public void setDbPlanName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbPlanName", java.util.Objects.requireNonNull(value, "dbPlanName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHostUuid() {
        return software.amazon.jsii.Kernel.get(this, "hostUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostUuid(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hostUuid", java.util.Objects.requireNonNull(value, "hostUuid is required"));
    }

    /**
     */
    public void setHostUuid(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostUuid", java.util.Objects.requireNonNull(value, "hostUuid is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceType() {
        return software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceType", java.util.Objects.requireNonNull(value, "sourceType is required"));
    }

    /**
     */
    public void setSourceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceType", java.util.Objects.requireNonNull(value, "sourceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVaultId() {
        return software.amazon.jsii.Kernel.get(this, "vaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVaultId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vaultId", java.util.Objects.requireNonNull(value, "vaultId is required"));
    }

    /**
     */
    public void setVaultId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vaultId", java.util.Objects.requireNonNull(value, "vaultId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContinuousPlan() {
        return software.amazon.jsii.Kernel.get(this, "continuousPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContinuousPlan(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "continuousPlan", value);
    }

    /**
     */
    public void setContinuousPlan(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "continuousPlan", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCumulativePlan() {
        return software.amazon.jsii.Kernel.get(this, "cumulativePlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCumulativePlan(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cumulativePlan", value);
    }

    /**
     */
    public void setCumulativePlan(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cumulativePlan", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFullPlan() {
        return software.amazon.jsii.Kernel.get(this, "fullPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFullPlan(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fullPlan", value);
    }

    /**
     */
    public void setFullPlan(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fullPlan", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIncPlan() {
        return software.amazon.jsii.Kernel.get(this, "incPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIncPlan(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "incPlan", value);
    }

    /**
     */
    public void setIncPlan(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "incPlan", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceUuid() {
        return software.amazon.jsii.Kernel.get(this, "instanceUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceUuid(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceUuid", value);
    }

    /**
     */
    public void setInstanceUuid(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceUuid", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogPlan() {
        return software.amazon.jsii.Kernel.get(this, "logPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogPlan(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logPlan", value);
    }

    /**
     */
    public void setLogPlan(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logPlan", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxRateLimit() {
        return software.amazon.jsii.Kernel.get(this, "maxRateLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxRateLimit(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxRateLimit", value);
    }

    /**
     */
    public void setMaxRateLimit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxRateLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxRetrySeconds() {
        return software.amazon.jsii.Kernel.get(this, "maxRetrySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxRetrySeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxRetrySeconds", value);
    }

    /**
     */
    public void setMaxRetrySeconds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxRetrySeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "options", value);
    }

    /**
     */
    public void setOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "options", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSource() {
        return software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "source", value);
    }

    /**
     */
    public void setSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.hbr.RosDbPlan.SourceProperty value) {
        software.amazon.jsii.Kernel.set(this, "source", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosDbPlan.SourceProperty")
    @software.amazon.jsii.Jsii.Proxy(SourceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SourceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEntries() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SourceProperty> {
            java.lang.Object entries;

            /**
             * Sets the value of {@link SourceProperty#getEntries}
             * @param entries the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder entries(com.aliyun.ros.cdk.core.IResolvable entries) {
                this.entries = entries;
                return this;
            }

            /**
             * Sets the value of {@link SourceProperty#getEntries}
             * @param entries the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder entries(java.util.List<? extends java.lang.Object> entries) {
                this.entries = entries;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SourceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SourceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceProperty {
            private final java.lang.Object entries;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.entries = software.amazon.jsii.Kernel.get(this, "entries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.entries = builder.entries;
            }

            @Override
            public final java.lang.Object getEntries() {
                return this.entries;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEntries() != null) {
                    data.set("entries", om.valueToTree(this.getEntries()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosDbPlan.SourceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SourceProperty.Jsii$Proxy that = (SourceProperty.Jsii$Proxy) o;

                return this.entries != null ? this.entries.equals(that.entries) : that.entries == null;
            }

            @Override
            public final int hashCode() {
                int result = this.entries != null ? this.entries.hashCode() : 0;
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.RosDbPlan}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.RosDbPlan> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.hbr.RosDbPlanProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.RosDbPlanProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dbPlanName This parameter is required.
         */
        public Builder dbPlanName(final java.lang.String dbPlanName) {
            this.props.dbPlanName(dbPlanName);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbPlanName This parameter is required.
         */
        public Builder dbPlanName(final com.aliyun.ros.cdk.core.IResolvable dbPlanName) {
            this.props.dbPlanName(dbPlanName);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostUuid This parameter is required.
         */
        public Builder hostUuid(final java.lang.String hostUuid) {
            this.props.hostUuid(hostUuid);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostUuid This parameter is required.
         */
        public Builder hostUuid(final com.aliyun.ros.cdk.core.IResolvable hostUuid) {
            this.props.hostUuid(hostUuid);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceType This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceType This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param vaultId This parameter is required.
         */
        public Builder vaultId(final java.lang.String vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vaultId This parameter is required.
         */
        public Builder vaultId(final com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }

        /**
         * @return {@code this}
         * @param continuousPlan This parameter is required.
         */
        public Builder continuousPlan(final java.lang.String continuousPlan) {
            this.props.continuousPlan(continuousPlan);
            return this;
        }
        /**
         * @return {@code this}
         * @param continuousPlan This parameter is required.
         */
        public Builder continuousPlan(final com.aliyun.ros.cdk.core.IResolvable continuousPlan) {
            this.props.continuousPlan(continuousPlan);
            return this;
        }

        /**
         * @return {@code this}
         * @param cumulativePlan This parameter is required.
         */
        public Builder cumulativePlan(final java.lang.String cumulativePlan) {
            this.props.cumulativePlan(cumulativePlan);
            return this;
        }
        /**
         * @return {@code this}
         * @param cumulativePlan This parameter is required.
         */
        public Builder cumulativePlan(final com.aliyun.ros.cdk.core.IResolvable cumulativePlan) {
            this.props.cumulativePlan(cumulativePlan);
            return this;
        }

        /**
         * @return {@code this}
         * @param fullPlan This parameter is required.
         */
        public Builder fullPlan(final java.lang.String fullPlan) {
            this.props.fullPlan(fullPlan);
            return this;
        }
        /**
         * @return {@code this}
         * @param fullPlan This parameter is required.
         */
        public Builder fullPlan(final com.aliyun.ros.cdk.core.IResolvable fullPlan) {
            this.props.fullPlan(fullPlan);
            return this;
        }

        /**
         * @return {@code this}
         * @param incPlan This parameter is required.
         */
        public Builder incPlan(final java.lang.String incPlan) {
            this.props.incPlan(incPlan);
            return this;
        }
        /**
         * @return {@code this}
         * @param incPlan This parameter is required.
         */
        public Builder incPlan(final com.aliyun.ros.cdk.core.IResolvable incPlan) {
            this.props.incPlan(incPlan);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceUuid This parameter is required.
         */
        public Builder instanceUuid(final java.lang.String instanceUuid) {
            this.props.instanceUuid(instanceUuid);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceUuid This parameter is required.
         */
        public Builder instanceUuid(final com.aliyun.ros.cdk.core.IResolvable instanceUuid) {
            this.props.instanceUuid(instanceUuid);
            return this;
        }

        /**
         * @return {@code this}
         * @param logPlan This parameter is required.
         */
        public Builder logPlan(final java.lang.String logPlan) {
            this.props.logPlan(logPlan);
            return this;
        }
        /**
         * @return {@code this}
         * @param logPlan This parameter is required.
         */
        public Builder logPlan(final com.aliyun.ros.cdk.core.IResolvable logPlan) {
            this.props.logPlan(logPlan);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxRateLimit This parameter is required.
         */
        public Builder maxRateLimit(final java.lang.Number maxRateLimit) {
            this.props.maxRateLimit(maxRateLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxRateLimit This parameter is required.
         */
        public Builder maxRateLimit(final com.aliyun.ros.cdk.core.IResolvable maxRateLimit) {
            this.props.maxRateLimit(maxRateLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxRetrySeconds This parameter is required.
         */
        public Builder maxRetrySeconds(final java.lang.Number maxRetrySeconds) {
            this.props.maxRetrySeconds(maxRetrySeconds);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxRetrySeconds This parameter is required.
         */
        public Builder maxRetrySeconds(final com.aliyun.ros.cdk.core.IResolvable maxRetrySeconds) {
            this.props.maxRetrySeconds(maxRetrySeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param options This parameter is required.
         */
        public Builder options(final java.lang.String options) {
            this.props.options(options);
            return this;
        }
        /**
         * @return {@code this}
         * @param options This parameter is required.
         */
        public Builder options(final com.aliyun.ros.cdk.core.IResolvable options) {
            this.props.options(options);
            return this;
        }

        /**
         * @return {@code this}
         * @param source This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }
        /**
         * @return {@code this}
         * @param source This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.hbr.RosDbPlan.SourceProperty source) {
            this.props.source(source);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.hbr.RosDbPlan}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.RosDbPlan build() {
            return new com.aliyun.ros.cdk.hbr.RosDbPlan(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
