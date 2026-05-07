package com.aliyun.ros.cdk.hbr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::HBR::OtsBackupPlan</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:51.225Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosOtsBackupPlan")
public class RosOtsBackupPlan extends com.aliyun.ros.cdk.core.RosResource {

    protected RosOtsBackupPlan(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosOtsBackupPlan(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.hbr.RosOtsBackupPlan.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosOtsBackupPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.RosOtsBackupPlanProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPlanId() {
        return software.amazon.jsii.Kernel.get(this, "attrPlanId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBackupType() {
        return software.amazon.jsii.Kernel.get(this, "backupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupType", java.util.Objects.requireNonNull(value, "backupType is required"));
    }

    /**
     */
    public void setBackupType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupType", java.util.Objects.requireNonNull(value, "backupType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPlanName() {
        return software.amazon.jsii.Kernel.get(this, "planName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPlanName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "planName", java.util.Objects.requireNonNull(value, "planName is required"));
    }

    /**
     */
    public void setPlanName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "planName", java.util.Objects.requireNonNull(value, "planName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRetention() {
        return software.amazon.jsii.Kernel.get(this, "retention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRetention(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "retention", java.util.Objects.requireNonNull(value, "retention is required"));
    }

    /**
     */
    public void setRetention(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "retention", java.util.Objects.requireNonNull(value, "retention is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSchedule() {
        return software.amazon.jsii.Kernel.get(this, "schedule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSchedule(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "schedule", java.util.Objects.requireNonNull(value, "schedule is required"));
    }

    /**
     */
    public void setSchedule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "schedule", java.util.Objects.requireNonNull(value, "schedule is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountRoleName() {
        return software.amazon.jsii.Kernel.get(this, "crossAccountRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrossAccountRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountRoleName", value);
    }

    /**
     */
    public void setCrossAccountRoleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountType() {
        return software.amazon.jsii.Kernel.get(this, "crossAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrossAccountType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountType", value);
    }

    /**
     */
    public void setCrossAccountType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountUserId() {
        return software.amazon.jsii.Kernel.get(this, "crossAccountUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrossAccountUserId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountUserId", value);
    }

    /**
     */
    public void setCrossAccountUserId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountUserId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDisabled() {
        return software.amazon.jsii.Kernel.get(this, "disabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "disabled", value);
    }

    /**
     */
    public void setDisabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "disabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", value);
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOtsDetail() {
        return software.amazon.jsii.Kernel.get(this, "otsDetail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOtsDetail(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "otsDetail", value);
    }

    /**
     */
    public void setOtsDetail(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.hbr.RosOtsBackupPlan.OtsDetailProperty value) {
        software.amazon.jsii.Kernel.set(this, "otsDetail", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRules() {
        return software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRules(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rules", value);
    }

    /**
     */
    public void setRules(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.hbr.RosOtsBackupPlan.RulesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.hbr.RosOtsBackupPlan.RulesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "rules", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosOtsBackupPlan.OtsDetailProperty")
    @software.amazon.jsii.Jsii.Proxy(OtsDetailProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OtsDetailProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTableNames() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OtsDetailProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OtsDetailProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OtsDetailProperty> {
            java.lang.Object tableNames;

            /**
             * Sets the value of {@link OtsDetailProperty#getTableNames}
             * @param tableNames the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableNames(com.aliyun.ros.cdk.core.IResolvable tableNames) {
                this.tableNames = tableNames;
                return this;
            }

            /**
             * Sets the value of {@link OtsDetailProperty#getTableNames}
             * @param tableNames the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableNames(java.util.List<? extends java.lang.Object> tableNames) {
                this.tableNames = tableNames;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OtsDetailProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OtsDetailProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OtsDetailProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OtsDetailProperty {
            private final java.lang.Object tableNames;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.tableNames = software.amazon.jsii.Kernel.get(this, "tableNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.tableNames = builder.tableNames;
            }

            @Override
            public final java.lang.Object getTableNames() {
                return this.tableNames;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getTableNames() != null) {
                    data.set("tableNames", om.valueToTree(this.getTableNames()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosOtsBackupPlan.OtsDetailProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OtsDetailProperty.Jsii$Proxy that = (OtsDetailProperty.Jsii$Proxy) o;

                return this.tableNames != null ? this.tableNames.equals(that.tableNames) : that.tableNames == null;
            }

            @Override
            public final int hashCode() {
                int result = this.tableNames != null ? this.tableNames.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosOtsBackupPlan.RulesProperty")
    @software.amazon.jsii.Jsii.Proxy(RulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBackupType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDisabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRetention() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSchedule() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RulesProperty> {
            java.lang.Object backupType;
            java.lang.Object disabled;
            java.lang.Object retention;
            java.lang.Object ruleName;
            java.lang.Object schedule;

            /**
             * Sets the value of {@link RulesProperty#getBackupType}
             * @param backupType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupType(java.lang.String backupType) {
                this.backupType = backupType;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getBackupType}
             * @param backupType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupType(com.aliyun.ros.cdk.core.IResolvable backupType) {
                this.backupType = backupType;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getDisabled}
             * @param disabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder disabled(java.lang.Boolean disabled) {
                this.disabled = disabled;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getDisabled}
             * @param disabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder disabled(com.aliyun.ros.cdk.core.IResolvable disabled) {
                this.disabled = disabled;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getRetention}
             * @param retention the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retention(java.lang.Number retention) {
                this.retention = retention;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getRetention}
             * @param retention the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retention(com.aliyun.ros.cdk.core.IResolvable retention) {
                this.retention = retention;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getRuleName}
             * @param ruleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleName(java.lang.String ruleName) {
                this.ruleName = ruleName;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getRuleName}
             * @param ruleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
                this.ruleName = ruleName;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getSchedule}
             * @param schedule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder schedule(java.lang.String schedule) {
                this.schedule = schedule;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getSchedule}
             * @param schedule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder schedule(com.aliyun.ros.cdk.core.IResolvable schedule) {
                this.schedule = schedule;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RulesProperty {
            private final java.lang.Object backupType;
            private final java.lang.Object disabled;
            private final java.lang.Object retention;
            private final java.lang.Object ruleName;
            private final java.lang.Object schedule;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.backupType = software.amazon.jsii.Kernel.get(this, "backupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.disabled = software.amazon.jsii.Kernel.get(this, "disabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.retention = software.amazon.jsii.Kernel.get(this, "retention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.schedule = software.amazon.jsii.Kernel.get(this, "schedule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.backupType = builder.backupType;
                this.disabled = builder.disabled;
                this.retention = builder.retention;
                this.ruleName = builder.ruleName;
                this.schedule = builder.schedule;
            }

            @Override
            public final java.lang.Object getBackupType() {
                return this.backupType;
            }

            @Override
            public final java.lang.Object getDisabled() {
                return this.disabled;
            }

            @Override
            public final java.lang.Object getRetention() {
                return this.retention;
            }

            @Override
            public final java.lang.Object getRuleName() {
                return this.ruleName;
            }

            @Override
            public final java.lang.Object getSchedule() {
                return this.schedule;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBackupType() != null) {
                    data.set("backupType", om.valueToTree(this.getBackupType()));
                }
                if (this.getDisabled() != null) {
                    data.set("disabled", om.valueToTree(this.getDisabled()));
                }
                if (this.getRetention() != null) {
                    data.set("retention", om.valueToTree(this.getRetention()));
                }
                if (this.getRuleName() != null) {
                    data.set("ruleName", om.valueToTree(this.getRuleName()));
                }
                if (this.getSchedule() != null) {
                    data.set("schedule", om.valueToTree(this.getSchedule()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosOtsBackupPlan.RulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RulesProperty.Jsii$Proxy that = (RulesProperty.Jsii$Proxy) o;

                if (this.backupType != null ? !this.backupType.equals(that.backupType) : that.backupType != null) return false;
                if (this.disabled != null ? !this.disabled.equals(that.disabled) : that.disabled != null) return false;
                if (this.retention != null ? !this.retention.equals(that.retention) : that.retention != null) return false;
                if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
                return this.schedule != null ? this.schedule.equals(that.schedule) : that.schedule == null;
            }

            @Override
            public final int hashCode() {
                int result = this.backupType != null ? this.backupType.hashCode() : 0;
                result = 31 * result + (this.disabled != null ? this.disabled.hashCode() : 0);
                result = 31 * result + (this.retention != null ? this.retention.hashCode() : 0);
                result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
                result = 31 * result + (this.schedule != null ? this.schedule.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.RosOtsBackupPlan}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.RosOtsBackupPlan> {
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
        private final com.aliyun.ros.cdk.hbr.RosOtsBackupPlanProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.RosOtsBackupPlanProps.Builder();
        }

        /**
         * @return {@code this}
         * @param backupType This parameter is required.
         */
        public Builder backupType(final java.lang.String backupType) {
            this.props.backupType(backupType);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupType This parameter is required.
         */
        public Builder backupType(final com.aliyun.ros.cdk.core.IResolvable backupType) {
            this.props.backupType(backupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param planName This parameter is required.
         */
        public Builder planName(final java.lang.String planName) {
            this.props.planName(planName);
            return this;
        }
        /**
         * @return {@code this}
         * @param planName This parameter is required.
         */
        public Builder planName(final com.aliyun.ros.cdk.core.IResolvable planName) {
            this.props.planName(planName);
            return this;
        }

        /**
         * @return {@code this}
         * @param retention This parameter is required.
         */
        public Builder retention(final java.lang.Number retention) {
            this.props.retention(retention);
            return this;
        }
        /**
         * @return {@code this}
         * @param retention This parameter is required.
         */
        public Builder retention(final com.aliyun.ros.cdk.core.IResolvable retention) {
            this.props.retention(retention);
            return this;
        }

        /**
         * @return {@code this}
         * @param schedule This parameter is required.
         */
        public Builder schedule(final java.lang.String schedule) {
            this.props.schedule(schedule);
            return this;
        }
        /**
         * @return {@code this}
         * @param schedule This parameter is required.
         */
        public Builder schedule(final com.aliyun.ros.cdk.core.IResolvable schedule) {
            this.props.schedule(schedule);
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
         * @param crossAccountRoleName This parameter is required.
         */
        public Builder crossAccountRoleName(final java.lang.String crossAccountRoleName) {
            this.props.crossAccountRoleName(crossAccountRoleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param crossAccountRoleName This parameter is required.
         */
        public Builder crossAccountRoleName(final com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
            this.props.crossAccountRoleName(crossAccountRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param crossAccountType This parameter is required.
         */
        public Builder crossAccountType(final java.lang.String crossAccountType) {
            this.props.crossAccountType(crossAccountType);
            return this;
        }
        /**
         * @return {@code this}
         * @param crossAccountType This parameter is required.
         */
        public Builder crossAccountType(final com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
            this.props.crossAccountType(crossAccountType);
            return this;
        }

        /**
         * @return {@code this}
         * @param crossAccountUserId This parameter is required.
         */
        public Builder crossAccountUserId(final java.lang.String crossAccountUserId) {
            this.props.crossAccountUserId(crossAccountUserId);
            return this;
        }
        /**
         * @return {@code this}
         * @param crossAccountUserId This parameter is required.
         */
        public Builder crossAccountUserId(final com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
            this.props.crossAccountUserId(crossAccountUserId);
            return this;
        }

        /**
         * @return {@code this}
         * @param disabled This parameter is required.
         */
        public Builder disabled(final java.lang.Boolean disabled) {
            this.props.disabled(disabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param disabled This parameter is required.
         */
        public Builder disabled(final com.aliyun.ros.cdk.core.IResolvable disabled) {
            this.props.disabled(disabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param otsDetail This parameter is required.
         */
        public Builder otsDetail(final com.aliyun.ros.cdk.core.IResolvable otsDetail) {
            this.props.otsDetail(otsDetail);
            return this;
        }
        /**
         * @return {@code this}
         * @param otsDetail This parameter is required.
         */
        public Builder otsDetail(final com.aliyun.ros.cdk.hbr.RosOtsBackupPlan.OtsDetailProperty otsDetail) {
            this.props.otsDetail(otsDetail);
            return this;
        }

        /**
         * @return {@code this}
         * @param rules This parameter is required.
         */
        public Builder rules(final com.aliyun.ros.cdk.core.IResolvable rules) {
            this.props.rules(rules);
            return this;
        }
        /**
         * @return {@code this}
         * @param rules This parameter is required.
         */
        public Builder rules(final java.util.List<? extends java.lang.Object> rules) {
            this.props.rules(rules);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.RosOtsBackupPlan}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.RosOtsBackupPlan build() {
            return new com.aliyun.ros.cdk.hbr.RosOtsBackupPlan(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
