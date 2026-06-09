package com.aliyun.ros.cdk.hbr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::HBR::Policy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:25:51.819Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosPolicy")
public class RosPolicy extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.hbr.RosPolicy.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.RosPolicyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policyName", java.util.Objects.requireNonNull(value, "policyName is required"));
    }

    /**
     */
    public void setPolicyName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyName", java.util.Objects.requireNonNull(value, "policyName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPolicyType() {
        return software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policyType", java.util.Objects.requireNonNull(value, "policyType is required"));
    }

    /**
     */
    public void setPolicyType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyType", java.util.Objects.requireNonNull(value, "policyType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRules() {
        return software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rules", java.util.Objects.requireNonNull(value, "rules is required"));
    }

    /**
     */
    public void setRules(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.hbr.RosPolicy.RulesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.hbr.RosPolicy.RulesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "rules", java.util.Objects.requireNonNull(value, "rules is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPolicyDescription() {
        return software.amazon.jsii.Kernel.get(this, "policyDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policyDescription", value);
    }

    /**
     */
    public void setPolicyDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyDescription", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosPolicy.DataSourceFiltersProperty")
    @software.amazon.jsii.Jsii.Proxy(DataSourceFiltersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataSourceFiltersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountRoleName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountUserId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DataSourceFiltersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataSourceFiltersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataSourceFiltersProperty> {
            java.lang.Object crossAccountRoleName;
            java.lang.Object crossAccountType;
            java.lang.Object crossAccountUserId;
            java.lang.Object sourceType;

            /**
             * Sets the value of {@link DataSourceFiltersProperty#getCrossAccountRoleName}
             * @param crossAccountRoleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossAccountRoleName(java.lang.String crossAccountRoleName) {
                this.crossAccountRoleName = crossAccountRoleName;
                return this;
            }

            /**
             * Sets the value of {@link DataSourceFiltersProperty#getCrossAccountRoleName}
             * @param crossAccountRoleName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossAccountRoleName(com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
                this.crossAccountRoleName = crossAccountRoleName;
                return this;
            }

            /**
             * Sets the value of {@link DataSourceFiltersProperty#getCrossAccountType}
             * @param crossAccountType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossAccountType(java.lang.String crossAccountType) {
                this.crossAccountType = crossAccountType;
                return this;
            }

            /**
             * Sets the value of {@link DataSourceFiltersProperty#getCrossAccountType}
             * @param crossAccountType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossAccountType(com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
                this.crossAccountType = crossAccountType;
                return this;
            }

            /**
             * Sets the value of {@link DataSourceFiltersProperty#getCrossAccountUserId}
             * @param crossAccountUserId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossAccountUserId(java.lang.String crossAccountUserId) {
                this.crossAccountUserId = crossAccountUserId;
                return this;
            }

            /**
             * Sets the value of {@link DataSourceFiltersProperty#getCrossAccountUserId}
             * @param crossAccountUserId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossAccountUserId(com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
                this.crossAccountUserId = crossAccountUserId;
                return this;
            }

            /**
             * Sets the value of {@link DataSourceFiltersProperty#getSourceType}
             * @param sourceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceType(java.lang.String sourceType) {
                this.sourceType = sourceType;
                return this;
            }

            /**
             * Sets the value of {@link DataSourceFiltersProperty#getSourceType}
             * @param sourceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
                this.sourceType = sourceType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataSourceFiltersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataSourceFiltersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DataSourceFiltersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataSourceFiltersProperty {
            private final java.lang.Object crossAccountRoleName;
            private final java.lang.Object crossAccountType;
            private final java.lang.Object crossAccountUserId;
            private final java.lang.Object sourceType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.crossAccountRoleName = software.amazon.jsii.Kernel.get(this, "crossAccountRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.crossAccountType = software.amazon.jsii.Kernel.get(this, "crossAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.crossAccountUserId = software.amazon.jsii.Kernel.get(this, "crossAccountUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.crossAccountRoleName = builder.crossAccountRoleName;
                this.crossAccountType = builder.crossAccountType;
                this.crossAccountUserId = builder.crossAccountUserId;
                this.sourceType = builder.sourceType;
            }

            @Override
            public final java.lang.Object getCrossAccountRoleName() {
                return this.crossAccountRoleName;
            }

            @Override
            public final java.lang.Object getCrossAccountType() {
                return this.crossAccountType;
            }

            @Override
            public final java.lang.Object getCrossAccountUserId() {
                return this.crossAccountUserId;
            }

            @Override
            public final java.lang.Object getSourceType() {
                return this.sourceType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCrossAccountRoleName() != null) {
                    data.set("crossAccountRoleName", om.valueToTree(this.getCrossAccountRoleName()));
                }
                if (this.getCrossAccountType() != null) {
                    data.set("crossAccountType", om.valueToTree(this.getCrossAccountType()));
                }
                if (this.getCrossAccountUserId() != null) {
                    data.set("crossAccountUserId", om.valueToTree(this.getCrossAccountUserId()));
                }
                if (this.getSourceType() != null) {
                    data.set("sourceType", om.valueToTree(this.getSourceType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosPolicy.DataSourceFiltersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataSourceFiltersProperty.Jsii$Proxy that = (DataSourceFiltersProperty.Jsii$Proxy) o;

                if (this.crossAccountRoleName != null ? !this.crossAccountRoleName.equals(that.crossAccountRoleName) : that.crossAccountRoleName != null) return false;
                if (this.crossAccountType != null ? !this.crossAccountType.equals(that.crossAccountType) : that.crossAccountType != null) return false;
                if (this.crossAccountUserId != null ? !this.crossAccountUserId.equals(that.crossAccountUserId) : that.crossAccountUserId != null) return false;
                return this.sourceType != null ? this.sourceType.equals(that.sourceType) : that.sourceType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.crossAccountRoleName != null ? this.crossAccountRoleName.hashCode() : 0;
                result = 31 * result + (this.crossAccountType != null ? this.crossAccountType.hashCode() : 0);
                result = 31 * result + (this.crossAccountUserId != null ? this.crossAccountUserId.hashCode() : 0);
                result = 31 * result + (this.sourceType != null ? this.sourceType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosPolicy.RetentionRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(RetentionRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RetentionRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAdvancedRetentionType() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getWhichSnapshot() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RetentionRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RetentionRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RetentionRulesProperty> {
            java.lang.Object advancedRetentionType;
            java.lang.Object retention;
            java.lang.Object whichSnapshot;

            /**
             * Sets the value of {@link RetentionRulesProperty#getAdvancedRetentionType}
             * @param advancedRetentionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder advancedRetentionType(java.lang.String advancedRetentionType) {
                this.advancedRetentionType = advancedRetentionType;
                return this;
            }

            /**
             * Sets the value of {@link RetentionRulesProperty#getAdvancedRetentionType}
             * @param advancedRetentionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder advancedRetentionType(com.aliyun.ros.cdk.core.IResolvable advancedRetentionType) {
                this.advancedRetentionType = advancedRetentionType;
                return this;
            }

            /**
             * Sets the value of {@link RetentionRulesProperty#getRetention}
             * @param retention the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retention(java.lang.Number retention) {
                this.retention = retention;
                return this;
            }

            /**
             * Sets the value of {@link RetentionRulesProperty#getRetention}
             * @param retention the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retention(com.aliyun.ros.cdk.core.IResolvable retention) {
                this.retention = retention;
                return this;
            }

            /**
             * Sets the value of {@link RetentionRulesProperty#getWhichSnapshot}
             * @param whichSnapshot the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder whichSnapshot(java.lang.Number whichSnapshot) {
                this.whichSnapshot = whichSnapshot;
                return this;
            }

            /**
             * Sets the value of {@link RetentionRulesProperty#getWhichSnapshot}
             * @param whichSnapshot the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder whichSnapshot(com.aliyun.ros.cdk.core.IResolvable whichSnapshot) {
                this.whichSnapshot = whichSnapshot;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RetentionRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RetentionRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RetentionRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RetentionRulesProperty {
            private final java.lang.Object advancedRetentionType;
            private final java.lang.Object retention;
            private final java.lang.Object whichSnapshot;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.advancedRetentionType = software.amazon.jsii.Kernel.get(this, "advancedRetentionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.retention = software.amazon.jsii.Kernel.get(this, "retention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.whichSnapshot = software.amazon.jsii.Kernel.get(this, "whichSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.advancedRetentionType = builder.advancedRetentionType;
                this.retention = builder.retention;
                this.whichSnapshot = builder.whichSnapshot;
            }

            @Override
            public final java.lang.Object getAdvancedRetentionType() {
                return this.advancedRetentionType;
            }

            @Override
            public final java.lang.Object getRetention() {
                return this.retention;
            }

            @Override
            public final java.lang.Object getWhichSnapshot() {
                return this.whichSnapshot;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAdvancedRetentionType() != null) {
                    data.set("advancedRetentionType", om.valueToTree(this.getAdvancedRetentionType()));
                }
                if (this.getRetention() != null) {
                    data.set("retention", om.valueToTree(this.getRetention()));
                }
                if (this.getWhichSnapshot() != null) {
                    data.set("whichSnapshot", om.valueToTree(this.getWhichSnapshot()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosPolicy.RetentionRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RetentionRulesProperty.Jsii$Proxy that = (RetentionRulesProperty.Jsii$Proxy) o;

                if (this.advancedRetentionType != null ? !this.advancedRetentionType.equals(that.advancedRetentionType) : that.advancedRetentionType != null) return false;
                if (this.retention != null ? !this.retention.equals(that.retention) : that.retention != null) return false;
                return this.whichSnapshot != null ? this.whichSnapshot.equals(that.whichSnapshot) : that.whichSnapshot == null;
            }

            @Override
            public final int hashCode() {
                int result = this.advancedRetentionType != null ? this.advancedRetentionType.hashCode() : 0;
                result = 31 * result + (this.retention != null ? this.retention.hashCode() : 0);
                result = 31 * result + (this.whichSnapshot != null ? this.whichSnapshot.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosPolicy.RulesProperty")
    @software.amazon.jsii.Jsii.Proxy(RulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuleType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArchiveDays() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArchiveVaultId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBackupType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getColdArchiveDays() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContinuous() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceFilters() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDoDetect() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImmutable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeepLatestSnapshots() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReplicationRegionId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReplicationVaultId() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getRetentionRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSchedule() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSelector() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTagFilters() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVaultId() {
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
            java.lang.Object ruleType;
            java.lang.Object archiveDays;
            java.lang.Object archiveVaultId;
            java.lang.Object backupType;
            java.lang.Object coldArchiveDays;
            java.lang.Object continuous;
            java.lang.Object dataSourceFilters;
            java.lang.Object doDetect;
            java.lang.Object immutable;
            java.lang.Object keepLatestSnapshots;
            java.lang.Object replicationRegionId;
            java.lang.Object replicationVaultId;
            java.lang.Object retention;
            java.lang.Object retentionRules;
            java.lang.Object schedule;
            java.lang.Object selector;
            java.lang.Object tagFilters;
            java.lang.Object vaultId;

            /**
             * Sets the value of {@link RulesProperty#getRuleType}
             * @param ruleType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleType(java.lang.String ruleType) {
                this.ruleType = ruleType;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getRuleType}
             * @param ruleType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleType(com.aliyun.ros.cdk.core.IResolvable ruleType) {
                this.ruleType = ruleType;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getArchiveDays}
             * @param archiveDays the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder archiveDays(java.lang.Number archiveDays) {
                this.archiveDays = archiveDays;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getArchiveDays}
             * @param archiveDays the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder archiveDays(com.aliyun.ros.cdk.core.IResolvable archiveDays) {
                this.archiveDays = archiveDays;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getArchiveVaultId}
             * @param archiveVaultId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder archiveVaultId(java.lang.String archiveVaultId) {
                this.archiveVaultId = archiveVaultId;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getArchiveVaultId}
             * @param archiveVaultId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder archiveVaultId(com.aliyun.ros.cdk.core.IResolvable archiveVaultId) {
                this.archiveVaultId = archiveVaultId;
                return this;
            }

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
             * Sets the value of {@link RulesProperty#getColdArchiveDays}
             * @param coldArchiveDays the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder coldArchiveDays(java.lang.Number coldArchiveDays) {
                this.coldArchiveDays = coldArchiveDays;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getColdArchiveDays}
             * @param coldArchiveDays the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder coldArchiveDays(com.aliyun.ros.cdk.core.IResolvable coldArchiveDays) {
                this.coldArchiveDays = coldArchiveDays;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getContinuous}
             * @param continuous the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder continuous(java.lang.Boolean continuous) {
                this.continuous = continuous;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getContinuous}
             * @param continuous the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder continuous(com.aliyun.ros.cdk.core.IResolvable continuous) {
                this.continuous = continuous;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getDataSourceFilters}
             * @param dataSourceFilters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataSourceFilters(com.aliyun.ros.cdk.core.IResolvable dataSourceFilters) {
                this.dataSourceFilters = dataSourceFilters;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getDataSourceFilters}
             * @param dataSourceFilters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataSourceFilters(java.util.List<? extends java.lang.Object> dataSourceFilters) {
                this.dataSourceFilters = dataSourceFilters;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getDoDetect}
             * @param doDetect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder doDetect(java.lang.Boolean doDetect) {
                this.doDetect = doDetect;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getDoDetect}
             * @param doDetect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder doDetect(com.aliyun.ros.cdk.core.IResolvable doDetect) {
                this.doDetect = doDetect;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getImmutable}
             * @param immutable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder immutable(java.lang.Boolean immutable) {
                this.immutable = immutable;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getImmutable}
             * @param immutable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder immutable(com.aliyun.ros.cdk.core.IResolvable immutable) {
                this.immutable = immutable;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getKeepLatestSnapshots}
             * @param keepLatestSnapshots the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keepLatestSnapshots(java.lang.Number keepLatestSnapshots) {
                this.keepLatestSnapshots = keepLatestSnapshots;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getKeepLatestSnapshots}
             * @param keepLatestSnapshots the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keepLatestSnapshots(com.aliyun.ros.cdk.core.IResolvable keepLatestSnapshots) {
                this.keepLatestSnapshots = keepLatestSnapshots;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getReplicationRegionId}
             * @param replicationRegionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replicationRegionId(java.lang.String replicationRegionId) {
                this.replicationRegionId = replicationRegionId;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getReplicationRegionId}
             * @param replicationRegionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replicationRegionId(com.aliyun.ros.cdk.core.IResolvable replicationRegionId) {
                this.replicationRegionId = replicationRegionId;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getReplicationVaultId}
             * @param replicationVaultId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replicationVaultId(java.lang.String replicationVaultId) {
                this.replicationVaultId = replicationVaultId;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getReplicationVaultId}
             * @param replicationVaultId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replicationVaultId(com.aliyun.ros.cdk.core.IResolvable replicationVaultId) {
                this.replicationVaultId = replicationVaultId;
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
             * Sets the value of {@link RulesProperty#getRetentionRules}
             * @param retentionRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retentionRules(com.aliyun.ros.cdk.core.IResolvable retentionRules) {
                this.retentionRules = retentionRules;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getRetentionRules}
             * @param retentionRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retentionRules(java.util.List<? extends java.lang.Object> retentionRules) {
                this.retentionRules = retentionRules;
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
             * Sets the value of {@link RulesProperty#getSelector}
             * @param selector the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder selector(com.aliyun.ros.cdk.core.IResolvable selector) {
                this.selector = selector;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getSelector}
             * @param selector the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder selector(com.aliyun.ros.cdk.hbr.RosPolicy.SelectorProperty selector) {
                this.selector = selector;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getTagFilters}
             * @param tagFilters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagFilters(com.aliyun.ros.cdk.core.IResolvable tagFilters) {
                this.tagFilters = tagFilters;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getTagFilters}
             * @param tagFilters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagFilters(java.util.List<? extends java.lang.Object> tagFilters) {
                this.tagFilters = tagFilters;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getVaultId}
             * @param vaultId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vaultId(java.lang.String vaultId) {
                this.vaultId = vaultId;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getVaultId}
             * @param vaultId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vaultId(com.aliyun.ros.cdk.core.IResolvable vaultId) {
                this.vaultId = vaultId;
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
            private final java.lang.Object ruleType;
            private final java.lang.Object archiveDays;
            private final java.lang.Object archiveVaultId;
            private final java.lang.Object backupType;
            private final java.lang.Object coldArchiveDays;
            private final java.lang.Object continuous;
            private final java.lang.Object dataSourceFilters;
            private final java.lang.Object doDetect;
            private final java.lang.Object immutable;
            private final java.lang.Object keepLatestSnapshots;
            private final java.lang.Object replicationRegionId;
            private final java.lang.Object replicationVaultId;
            private final java.lang.Object retention;
            private final java.lang.Object retentionRules;
            private final java.lang.Object schedule;
            private final java.lang.Object selector;
            private final java.lang.Object tagFilters;
            private final java.lang.Object vaultId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ruleType = software.amazon.jsii.Kernel.get(this, "ruleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.archiveDays = software.amazon.jsii.Kernel.get(this, "archiveDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.archiveVaultId = software.amazon.jsii.Kernel.get(this, "archiveVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.backupType = software.amazon.jsii.Kernel.get(this, "backupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.coldArchiveDays = software.amazon.jsii.Kernel.get(this, "coldArchiveDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.continuous = software.amazon.jsii.Kernel.get(this, "continuous", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataSourceFilters = software.amazon.jsii.Kernel.get(this, "dataSourceFilters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.doDetect = software.amazon.jsii.Kernel.get(this, "doDetect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.immutable = software.amazon.jsii.Kernel.get(this, "immutable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keepLatestSnapshots = software.amazon.jsii.Kernel.get(this, "keepLatestSnapshots", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replicationRegionId = software.amazon.jsii.Kernel.get(this, "replicationRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replicationVaultId = software.amazon.jsii.Kernel.get(this, "replicationVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.retention = software.amazon.jsii.Kernel.get(this, "retention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.retentionRules = software.amazon.jsii.Kernel.get(this, "retentionRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.schedule = software.amazon.jsii.Kernel.get(this, "schedule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.selector = software.amazon.jsii.Kernel.get(this, "selector", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tagFilters = software.amazon.jsii.Kernel.get(this, "tagFilters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vaultId = software.amazon.jsii.Kernel.get(this, "vaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ruleType = java.util.Objects.requireNonNull(builder.ruleType, "ruleType is required");
                this.archiveDays = builder.archiveDays;
                this.archiveVaultId = builder.archiveVaultId;
                this.backupType = builder.backupType;
                this.coldArchiveDays = builder.coldArchiveDays;
                this.continuous = builder.continuous;
                this.dataSourceFilters = builder.dataSourceFilters;
                this.doDetect = builder.doDetect;
                this.immutable = builder.immutable;
                this.keepLatestSnapshots = builder.keepLatestSnapshots;
                this.replicationRegionId = builder.replicationRegionId;
                this.replicationVaultId = builder.replicationVaultId;
                this.retention = builder.retention;
                this.retentionRules = builder.retentionRules;
                this.schedule = builder.schedule;
                this.selector = builder.selector;
                this.tagFilters = builder.tagFilters;
                this.vaultId = builder.vaultId;
            }

            @Override
            public final java.lang.Object getRuleType() {
                return this.ruleType;
            }

            @Override
            public final java.lang.Object getArchiveDays() {
                return this.archiveDays;
            }

            @Override
            public final java.lang.Object getArchiveVaultId() {
                return this.archiveVaultId;
            }

            @Override
            public final java.lang.Object getBackupType() {
                return this.backupType;
            }

            @Override
            public final java.lang.Object getColdArchiveDays() {
                return this.coldArchiveDays;
            }

            @Override
            public final java.lang.Object getContinuous() {
                return this.continuous;
            }

            @Override
            public final java.lang.Object getDataSourceFilters() {
                return this.dataSourceFilters;
            }

            @Override
            public final java.lang.Object getDoDetect() {
                return this.doDetect;
            }

            @Override
            public final java.lang.Object getImmutable() {
                return this.immutable;
            }

            @Override
            public final java.lang.Object getKeepLatestSnapshots() {
                return this.keepLatestSnapshots;
            }

            @Override
            public final java.lang.Object getReplicationRegionId() {
                return this.replicationRegionId;
            }

            @Override
            public final java.lang.Object getReplicationVaultId() {
                return this.replicationVaultId;
            }

            @Override
            public final java.lang.Object getRetention() {
                return this.retention;
            }

            @Override
            public final java.lang.Object getRetentionRules() {
                return this.retentionRules;
            }

            @Override
            public final java.lang.Object getSchedule() {
                return this.schedule;
            }

            @Override
            public final java.lang.Object getSelector() {
                return this.selector;
            }

            @Override
            public final java.lang.Object getTagFilters() {
                return this.tagFilters;
            }

            @Override
            public final java.lang.Object getVaultId() {
                return this.vaultId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ruleType", om.valueToTree(this.getRuleType()));
                if (this.getArchiveDays() != null) {
                    data.set("archiveDays", om.valueToTree(this.getArchiveDays()));
                }
                if (this.getArchiveVaultId() != null) {
                    data.set("archiveVaultId", om.valueToTree(this.getArchiveVaultId()));
                }
                if (this.getBackupType() != null) {
                    data.set("backupType", om.valueToTree(this.getBackupType()));
                }
                if (this.getColdArchiveDays() != null) {
                    data.set("coldArchiveDays", om.valueToTree(this.getColdArchiveDays()));
                }
                if (this.getContinuous() != null) {
                    data.set("continuous", om.valueToTree(this.getContinuous()));
                }
                if (this.getDataSourceFilters() != null) {
                    data.set("dataSourceFilters", om.valueToTree(this.getDataSourceFilters()));
                }
                if (this.getDoDetect() != null) {
                    data.set("doDetect", om.valueToTree(this.getDoDetect()));
                }
                if (this.getImmutable() != null) {
                    data.set("immutable", om.valueToTree(this.getImmutable()));
                }
                if (this.getKeepLatestSnapshots() != null) {
                    data.set("keepLatestSnapshots", om.valueToTree(this.getKeepLatestSnapshots()));
                }
                if (this.getReplicationRegionId() != null) {
                    data.set("replicationRegionId", om.valueToTree(this.getReplicationRegionId()));
                }
                if (this.getReplicationVaultId() != null) {
                    data.set("replicationVaultId", om.valueToTree(this.getReplicationVaultId()));
                }
                if (this.getRetention() != null) {
                    data.set("retention", om.valueToTree(this.getRetention()));
                }
                if (this.getRetentionRules() != null) {
                    data.set("retentionRules", om.valueToTree(this.getRetentionRules()));
                }
                if (this.getSchedule() != null) {
                    data.set("schedule", om.valueToTree(this.getSchedule()));
                }
                if (this.getSelector() != null) {
                    data.set("selector", om.valueToTree(this.getSelector()));
                }
                if (this.getTagFilters() != null) {
                    data.set("tagFilters", om.valueToTree(this.getTagFilters()));
                }
                if (this.getVaultId() != null) {
                    data.set("vaultId", om.valueToTree(this.getVaultId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosPolicy.RulesProperty"));
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

                if (!ruleType.equals(that.ruleType)) return false;
                if (this.archiveDays != null ? !this.archiveDays.equals(that.archiveDays) : that.archiveDays != null) return false;
                if (this.archiveVaultId != null ? !this.archiveVaultId.equals(that.archiveVaultId) : that.archiveVaultId != null) return false;
                if (this.backupType != null ? !this.backupType.equals(that.backupType) : that.backupType != null) return false;
                if (this.coldArchiveDays != null ? !this.coldArchiveDays.equals(that.coldArchiveDays) : that.coldArchiveDays != null) return false;
                if (this.continuous != null ? !this.continuous.equals(that.continuous) : that.continuous != null) return false;
                if (this.dataSourceFilters != null ? !this.dataSourceFilters.equals(that.dataSourceFilters) : that.dataSourceFilters != null) return false;
                if (this.doDetect != null ? !this.doDetect.equals(that.doDetect) : that.doDetect != null) return false;
                if (this.immutable != null ? !this.immutable.equals(that.immutable) : that.immutable != null) return false;
                if (this.keepLatestSnapshots != null ? !this.keepLatestSnapshots.equals(that.keepLatestSnapshots) : that.keepLatestSnapshots != null) return false;
                if (this.replicationRegionId != null ? !this.replicationRegionId.equals(that.replicationRegionId) : that.replicationRegionId != null) return false;
                if (this.replicationVaultId != null ? !this.replicationVaultId.equals(that.replicationVaultId) : that.replicationVaultId != null) return false;
                if (this.retention != null ? !this.retention.equals(that.retention) : that.retention != null) return false;
                if (this.retentionRules != null ? !this.retentionRules.equals(that.retentionRules) : that.retentionRules != null) return false;
                if (this.schedule != null ? !this.schedule.equals(that.schedule) : that.schedule != null) return false;
                if (this.selector != null ? !this.selector.equals(that.selector) : that.selector != null) return false;
                if (this.tagFilters != null ? !this.tagFilters.equals(that.tagFilters) : that.tagFilters != null) return false;
                return this.vaultId != null ? this.vaultId.equals(that.vaultId) : that.vaultId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ruleType.hashCode();
                result = 31 * result + (this.archiveDays != null ? this.archiveDays.hashCode() : 0);
                result = 31 * result + (this.archiveVaultId != null ? this.archiveVaultId.hashCode() : 0);
                result = 31 * result + (this.backupType != null ? this.backupType.hashCode() : 0);
                result = 31 * result + (this.coldArchiveDays != null ? this.coldArchiveDays.hashCode() : 0);
                result = 31 * result + (this.continuous != null ? this.continuous.hashCode() : 0);
                result = 31 * result + (this.dataSourceFilters != null ? this.dataSourceFilters.hashCode() : 0);
                result = 31 * result + (this.doDetect != null ? this.doDetect.hashCode() : 0);
                result = 31 * result + (this.immutable != null ? this.immutable.hashCode() : 0);
                result = 31 * result + (this.keepLatestSnapshots != null ? this.keepLatestSnapshots.hashCode() : 0);
                result = 31 * result + (this.replicationRegionId != null ? this.replicationRegionId.hashCode() : 0);
                result = 31 * result + (this.replicationVaultId != null ? this.replicationVaultId.hashCode() : 0);
                result = 31 * result + (this.retention != null ? this.retention.hashCode() : 0);
                result = 31 * result + (this.retentionRules != null ? this.retentionRules.hashCode() : 0);
                result = 31 * result + (this.schedule != null ? this.schedule.hashCode() : 0);
                result = 31 * result + (this.selector != null ? this.selector.hashCode() : 0);
                result = 31 * result + (this.tagFilters != null ? this.tagFilters.hashCode() : 0);
                result = 31 * result + (this.vaultId != null ? this.vaultId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosPolicy.SelectorProperty")
    @software.amazon.jsii.Jsii.Proxy(SelectorProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SelectorProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SelectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SelectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SelectorProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link SelectorProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link SelectorProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link SelectorProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link SelectorProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SelectorProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SelectorProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SelectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SelectorProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosPolicy.SelectorProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SelectorProperty.Jsii$Proxy that = (SelectorProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosPolicy.TagFiltersProperty")
    @software.amazon.jsii.Jsii.Proxy(TagFiltersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagFiltersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOperator() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagFiltersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagFiltersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagFiltersProperty> {
            java.lang.Object key;
            java.lang.Object operator;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagFiltersProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagFiltersProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagFiltersProperty#getOperator}
             * @param operator the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder operator(java.lang.String operator) {
                this.operator = operator;
                return this;
            }

            /**
             * Sets the value of {@link TagFiltersProperty#getOperator}
             * @param operator the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder operator(com.aliyun.ros.cdk.core.IResolvable operator) {
                this.operator = operator;
                return this;
            }

            /**
             * Sets the value of {@link TagFiltersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagFiltersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagFiltersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagFiltersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagFiltersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagFiltersProperty {
            private final java.lang.Object key;
            private final java.lang.Object operator;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.operator = software.amazon.jsii.Kernel.get(this, "operator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.operator = builder.operator;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getOperator() {
                return this.operator;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getOperator() != null) {
                    data.set("operator", om.valueToTree(this.getOperator()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosPolicy.TagFiltersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagFiltersProperty.Jsii$Proxy that = (TagFiltersProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                if (this.operator != null ? !this.operator.equals(that.operator) : that.operator != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.operator != null ? this.operator.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.RosPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.RosPolicy> {
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
        private final com.aliyun.ros.cdk.hbr.RosPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.RosPolicyProps.Builder();
        }

        /**
         * @return {@code this}
         * @param policyName This parameter is required.
         */
        public Builder policyName(final java.lang.String policyName) {
            this.props.policyName(policyName);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyName This parameter is required.
         */
        public Builder policyName(final com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.props.policyName(policyName);
            return this;
        }

        /**
         * @return {@code this}
         * @param policyType This parameter is required.
         */
        public Builder policyType(final java.lang.String policyType) {
            this.props.policyType(policyType);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyType This parameter is required.
         */
        public Builder policyType(final com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.props.policyType(policyType);
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
         * @return {@code this}
         * @param policyDescription This parameter is required.
         */
        public Builder policyDescription(final java.lang.String policyDescription) {
            this.props.policyDescription(policyDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyDescription This parameter is required.
         */
        public Builder policyDescription(final com.aliyun.ros.cdk.core.IResolvable policyDescription) {
            this.props.policyDescription(policyDescription);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.RosPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.RosPolicy build() {
            return new com.aliyun.ros.cdk.hbr.RosPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
