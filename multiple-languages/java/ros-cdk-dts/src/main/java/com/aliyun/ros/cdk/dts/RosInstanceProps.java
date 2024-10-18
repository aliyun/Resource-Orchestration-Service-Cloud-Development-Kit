package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a <code>RosInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:28.622Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceClass();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoStart() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComputeUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointEngineName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationRegion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFeeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJobId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceEndpointEngineName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceRegion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSyncArchitecture() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsedTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceProps> {
        java.lang.Object instanceClass;
        java.lang.Object payType;
        java.lang.Object type;
        java.lang.Object autoPay;
        java.lang.Object autoStart;
        java.lang.Object computeUnit;
        java.lang.Object databaseCount;
        java.lang.Object destinationEndpointEngineName;
        java.lang.Object destinationRegion;
        java.lang.Object du;
        java.lang.Object feeType;
        java.lang.Object jobId;
        java.lang.Object period;
        java.lang.Object resourceGroupId;
        java.lang.Object sourceEndpointEngineName;
        java.lang.Object sourceRegion;
        java.lang.Object syncArchitecture;
        java.lang.Object usedTime;

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceClass}
         * @param instanceClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceClass(java.lang.String instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceClass}
         * @param instanceClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceClass(com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.instanceClass = instanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoStart}
         * @param autoStart the value to be set.
         * @return {@code this}
         */
        public Builder autoStart(java.lang.Boolean autoStart) {
            this.autoStart = autoStart;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoStart}
         * @param autoStart the value to be set.
         * @return {@code this}
         */
        public Builder autoStart(com.aliyun.ros.cdk.core.IResolvable autoStart) {
            this.autoStart = autoStart;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getComputeUnit}
         * @param computeUnit the value to be set.
         * @return {@code this}
         */
        public Builder computeUnit(java.lang.Number computeUnit) {
            this.computeUnit = computeUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getComputeUnit}
         * @param computeUnit the value to be set.
         * @return {@code this}
         */
        public Builder computeUnit(com.aliyun.ros.cdk.core.IResolvable computeUnit) {
            this.computeUnit = computeUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDatabaseCount}
         * @param databaseCount the value to be set.
         * @return {@code this}
         */
        public Builder databaseCount(java.lang.Number databaseCount) {
            this.databaseCount = databaseCount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDatabaseCount}
         * @param databaseCount the value to be set.
         * @return {@code this}
         */
        public Builder databaseCount(com.aliyun.ros.cdk.core.IResolvable databaseCount) {
            this.databaseCount = databaseCount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDestinationEndpointEngineName}
         * @param destinationEndpointEngineName the value to be set.
         * @return {@code this}
         */
        public Builder destinationEndpointEngineName(java.lang.String destinationEndpointEngineName) {
            this.destinationEndpointEngineName = destinationEndpointEngineName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDestinationEndpointEngineName}
         * @param destinationEndpointEngineName the value to be set.
         * @return {@code this}
         */
        public Builder destinationEndpointEngineName(com.aliyun.ros.cdk.core.IResolvable destinationEndpointEngineName) {
            this.destinationEndpointEngineName = destinationEndpointEngineName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDestinationRegion}
         * @param destinationRegion the value to be set.
         * @return {@code this}
         */
        public Builder destinationRegion(java.lang.String destinationRegion) {
            this.destinationRegion = destinationRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDestinationRegion}
         * @param destinationRegion the value to be set.
         * @return {@code this}
         */
        public Builder destinationRegion(com.aliyun.ros.cdk.core.IResolvable destinationRegion) {
            this.destinationRegion = destinationRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDu}
         * @param du the value to be set.
         * @return {@code this}
         */
        public Builder du(java.lang.Number du) {
            this.du = du;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDu}
         * @param du the value to be set.
         * @return {@code this}
         */
        public Builder du(com.aliyun.ros.cdk.core.IResolvable du) {
            this.du = du;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getFeeType}
         * @param feeType the value to be set.
         * @return {@code this}
         */
        public Builder feeType(java.lang.String feeType) {
            this.feeType = feeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getFeeType}
         * @param feeType the value to be set.
         * @return {@code this}
         */
        public Builder feeType(com.aliyun.ros.cdk.core.IResolvable feeType) {
            this.feeType = feeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getJobId}
         * @param jobId the value to be set.
         * @return {@code this}
         */
        public Builder jobId(java.lang.String jobId) {
            this.jobId = jobId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getJobId}
         * @param jobId the value to be set.
         * @return {@code this}
         */
        public Builder jobId(com.aliyun.ros.cdk.core.IResolvable jobId) {
            this.jobId = jobId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSourceEndpointEngineName}
         * @param sourceEndpointEngineName the value to be set.
         * @return {@code this}
         */
        public Builder sourceEndpointEngineName(java.lang.String sourceEndpointEngineName) {
            this.sourceEndpointEngineName = sourceEndpointEngineName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSourceEndpointEngineName}
         * @param sourceEndpointEngineName the value to be set.
         * @return {@code this}
         */
        public Builder sourceEndpointEngineName(com.aliyun.ros.cdk.core.IResolvable sourceEndpointEngineName) {
            this.sourceEndpointEngineName = sourceEndpointEngineName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSourceRegion}
         * @param sourceRegion the value to be set.
         * @return {@code this}
         */
        public Builder sourceRegion(java.lang.String sourceRegion) {
            this.sourceRegion = sourceRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSourceRegion}
         * @param sourceRegion the value to be set.
         * @return {@code this}
         */
        public Builder sourceRegion(com.aliyun.ros.cdk.core.IResolvable sourceRegion) {
            this.sourceRegion = sourceRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSyncArchitecture}
         * @param syncArchitecture the value to be set.
         * @return {@code this}
         */
        public Builder syncArchitecture(java.lang.String syncArchitecture) {
            this.syncArchitecture = syncArchitecture;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSyncArchitecture}
         * @param syncArchitecture the value to be set.
         * @return {@code this}
         */
        public Builder syncArchitecture(com.aliyun.ros.cdk.core.IResolvable syncArchitecture) {
            this.syncArchitecture = syncArchitecture;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getUsedTime}
         * @param usedTime the value to be set.
         * @return {@code this}
         */
        public Builder usedTime(java.lang.Number usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getUsedTime}
         * @param usedTime the value to be set.
         * @return {@code this}
         */
        public Builder usedTime(com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.Object instanceClass;
        private final java.lang.Object payType;
        private final java.lang.Object type;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoStart;
        private final java.lang.Object computeUnit;
        private final java.lang.Object databaseCount;
        private final java.lang.Object destinationEndpointEngineName;
        private final java.lang.Object destinationRegion;
        private final java.lang.Object du;
        private final java.lang.Object feeType;
        private final java.lang.Object jobId;
        private final java.lang.Object period;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object sourceEndpointEngineName;
        private final java.lang.Object sourceRegion;
        private final java.lang.Object syncArchitecture;
        private final java.lang.Object usedTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceClass = software.amazon.jsii.Kernel.get(this, "instanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoStart = software.amazon.jsii.Kernel.get(this, "autoStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.computeUnit = software.amazon.jsii.Kernel.get(this, "computeUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.databaseCount = software.amazon.jsii.Kernel.get(this, "databaseCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpointEngineName = software.amazon.jsii.Kernel.get(this, "destinationEndpointEngineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationRegion = software.amazon.jsii.Kernel.get(this, "destinationRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.du = software.amazon.jsii.Kernel.get(this, "du", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.feeType = software.amazon.jsii.Kernel.get(this, "feeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jobId = software.amazon.jsii.Kernel.get(this, "jobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceEndpointEngineName = software.amazon.jsii.Kernel.get(this, "sourceEndpointEngineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceRegion = software.amazon.jsii.Kernel.get(this, "sourceRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.syncArchitecture = software.amazon.jsii.Kernel.get(this, "syncArchitecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.usedTime = software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceClass = java.util.Objects.requireNonNull(builder.instanceClass, "instanceClass is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.autoPay = builder.autoPay;
            this.autoStart = builder.autoStart;
            this.computeUnit = builder.computeUnit;
            this.databaseCount = builder.databaseCount;
            this.destinationEndpointEngineName = builder.destinationEndpointEngineName;
            this.destinationRegion = builder.destinationRegion;
            this.du = builder.du;
            this.feeType = builder.feeType;
            this.jobId = builder.jobId;
            this.period = builder.period;
            this.resourceGroupId = builder.resourceGroupId;
            this.sourceEndpointEngineName = builder.sourceEndpointEngineName;
            this.sourceRegion = builder.sourceRegion;
            this.syncArchitecture = builder.syncArchitecture;
            this.usedTime = builder.usedTime;
        }

        @Override
        public final java.lang.Object getInstanceClass() {
            return this.instanceClass;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoStart() {
            return this.autoStart;
        }

        @Override
        public final java.lang.Object getComputeUnit() {
            return this.computeUnit;
        }

        @Override
        public final java.lang.Object getDatabaseCount() {
            return this.databaseCount;
        }

        @Override
        public final java.lang.Object getDestinationEndpointEngineName() {
            return this.destinationEndpointEngineName;
        }

        @Override
        public final java.lang.Object getDestinationRegion() {
            return this.destinationRegion;
        }

        @Override
        public final java.lang.Object getDu() {
            return this.du;
        }

        @Override
        public final java.lang.Object getFeeType() {
            return this.feeType;
        }

        @Override
        public final java.lang.Object getJobId() {
            return this.jobId;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSourceEndpointEngineName() {
            return this.sourceEndpointEngineName;
        }

        @Override
        public final java.lang.Object getSourceRegion() {
            return this.sourceRegion;
        }

        @Override
        public final java.lang.Object getSyncArchitecture() {
            return this.syncArchitecture;
        }

        @Override
        public final java.lang.Object getUsedTime() {
            return this.usedTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceClass", om.valueToTree(this.getInstanceClass()));
            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoStart() != null) {
                data.set("autoStart", om.valueToTree(this.getAutoStart()));
            }
            if (this.getComputeUnit() != null) {
                data.set("computeUnit", om.valueToTree(this.getComputeUnit()));
            }
            if (this.getDatabaseCount() != null) {
                data.set("databaseCount", om.valueToTree(this.getDatabaseCount()));
            }
            if (this.getDestinationEndpointEngineName() != null) {
                data.set("destinationEndpointEngineName", om.valueToTree(this.getDestinationEndpointEngineName()));
            }
            if (this.getDestinationRegion() != null) {
                data.set("destinationRegion", om.valueToTree(this.getDestinationRegion()));
            }
            if (this.getDu() != null) {
                data.set("du", om.valueToTree(this.getDu()));
            }
            if (this.getFeeType() != null) {
                data.set("feeType", om.valueToTree(this.getFeeType()));
            }
            if (this.getJobId() != null) {
                data.set("jobId", om.valueToTree(this.getJobId()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSourceEndpointEngineName() != null) {
                data.set("sourceEndpointEngineName", om.valueToTree(this.getSourceEndpointEngineName()));
            }
            if (this.getSourceRegion() != null) {
                data.set("sourceRegion", om.valueToTree(this.getSourceRegion()));
            }
            if (this.getSyncArchitecture() != null) {
                data.set("syncArchitecture", om.valueToTree(this.getSyncArchitecture()));
            }
            if (this.getUsedTime() != null) {
                data.set("usedTime", om.valueToTree(this.getUsedTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceProps.Jsii$Proxy that = (RosInstanceProps.Jsii$Proxy) o;

            if (!instanceClass.equals(that.instanceClass)) return false;
            if (!payType.equals(that.payType)) return false;
            if (!type.equals(that.type)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoStart != null ? !this.autoStart.equals(that.autoStart) : that.autoStart != null) return false;
            if (this.computeUnit != null ? !this.computeUnit.equals(that.computeUnit) : that.computeUnit != null) return false;
            if (this.databaseCount != null ? !this.databaseCount.equals(that.databaseCount) : that.databaseCount != null) return false;
            if (this.destinationEndpointEngineName != null ? !this.destinationEndpointEngineName.equals(that.destinationEndpointEngineName) : that.destinationEndpointEngineName != null) return false;
            if (this.destinationRegion != null ? !this.destinationRegion.equals(that.destinationRegion) : that.destinationRegion != null) return false;
            if (this.du != null ? !this.du.equals(that.du) : that.du != null) return false;
            if (this.feeType != null ? !this.feeType.equals(that.feeType) : that.feeType != null) return false;
            if (this.jobId != null ? !this.jobId.equals(that.jobId) : that.jobId != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.sourceEndpointEngineName != null ? !this.sourceEndpointEngineName.equals(that.sourceEndpointEngineName) : that.sourceEndpointEngineName != null) return false;
            if (this.sourceRegion != null ? !this.sourceRegion.equals(that.sourceRegion) : that.sourceRegion != null) return false;
            if (this.syncArchitecture != null ? !this.syncArchitecture.equals(that.syncArchitecture) : that.syncArchitecture != null) return false;
            return this.usedTime != null ? this.usedTime.equals(that.usedTime) : that.usedTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceClass.hashCode();
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoStart != null ? this.autoStart.hashCode() : 0);
            result = 31 * result + (this.computeUnit != null ? this.computeUnit.hashCode() : 0);
            result = 31 * result + (this.databaseCount != null ? this.databaseCount.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointEngineName != null ? this.destinationEndpointEngineName.hashCode() : 0);
            result = 31 * result + (this.destinationRegion != null ? this.destinationRegion.hashCode() : 0);
            result = 31 * result + (this.du != null ? this.du.hashCode() : 0);
            result = 31 * result + (this.feeType != null ? this.feeType.hashCode() : 0);
            result = 31 * result + (this.jobId != null ? this.jobId.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.sourceEndpointEngineName != null ? this.sourceEndpointEngineName.hashCode() : 0);
            result = 31 * result + (this.sourceRegion != null ? this.sourceRegion.hashCode() : 0);
            result = 31 * result + (this.syncArchitecture != null ? this.syncArchitecture.hashCode() : 0);
            result = 31 * result + (this.usedTime != null ? this.usedTime.hashCode() : 0);
            return result;
        }
    }
}
