package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>DBNodes</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.942Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBNodesProps")
@software.amazon.jsii.Jsii.Proxy(DBNodesProps.Jsii$Proxy.class)
public interface DBNodesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property amount: Number of nodes to be added to cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAmount();

    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property dbNodeType: Node type.
     * <p>
     * Ranges: RO|STANDBY|DLNode|RW
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbNodeType() {
        return null;
    }

    /**
     * Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointBindList() {
        return null;
    }

    /**
     * Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImciSwitch() {
        return null;
    }

    /**
     * Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period).
     * <p>
     * The format is YYYY-MM-DDThh:mm:ssZ (UTC).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPlannedEndTime() {
        return null;
    }

    /**
     * Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period).
     * <p>
     * The format is YYYY-MM-DDThh:mm:ssZ (UTC).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPlannedStartTime() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBNodesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBNodesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBNodesProps> {
        java.lang.Object amount;
        java.lang.Object dbClusterId;
        java.lang.Object dbNodeType;
        java.lang.Object endpointBindList;
        java.lang.Object imciSwitch;
        java.lang.Object plannedEndTime;
        java.lang.Object plannedStartTime;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link DBNodesProps#getAmount}
         * @param amount Property amount: Number of nodes to be added to cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder amount(java.lang.Number amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getAmount}
         * @param amount Property amount: Number of nodes to be added to cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder amount(com.aliyun.ros.cdk.core.IResolvable amount) {
            this.amount = amount;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getDbNodeType}
         * @param dbNodeType Property dbNodeType: Node type.
         *                   Ranges: RO|STANDBY|DLNode|RW
         * @return {@code this}
         */
        public Builder dbNodeType(java.lang.String dbNodeType) {
            this.dbNodeType = dbNodeType;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getDbNodeType}
         * @param dbNodeType Property dbNodeType: Node type.
         *                   Ranges: RO|STANDBY|DLNode|RW
         * @return {@code this}
         */
        public Builder dbNodeType(com.aliyun.ros.cdk.core.IResolvable dbNodeType) {
            this.dbNodeType = dbNodeType;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getEndpointBindList}
         * @param endpointBindList Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.
         * @return {@code this}
         */
        public Builder endpointBindList(com.aliyun.ros.cdk.core.IResolvable endpointBindList) {
            this.endpointBindList = endpointBindList;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getEndpointBindList}
         * @param endpointBindList Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.
         * @return {@code this}
         */
        public Builder endpointBindList(java.util.List<? extends java.lang.Object> endpointBindList) {
            this.endpointBindList = endpointBindList;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getImciSwitch}
         * @param imciSwitch Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
         * @return {@code this}
         */
        public Builder imciSwitch(java.lang.String imciSwitch) {
            this.imciSwitch = imciSwitch;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getImciSwitch}
         * @param imciSwitch Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
         * @return {@code this}
         */
        public Builder imciSwitch(com.aliyun.ros.cdk.core.IResolvable imciSwitch) {
            this.imciSwitch = imciSwitch;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getPlannedEndTime}
         * @param plannedEndTime Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period).
         *                       The format is YYYY-MM-DDThh:mm:ssZ (UTC).
         * @return {@code this}
         */
        public Builder plannedEndTime(java.lang.String plannedEndTime) {
            this.plannedEndTime = plannedEndTime;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getPlannedEndTime}
         * @param plannedEndTime Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period).
         *                       The format is YYYY-MM-DDThh:mm:ssZ (UTC).
         * @return {@code this}
         */
        public Builder plannedEndTime(com.aliyun.ros.cdk.core.IResolvable plannedEndTime) {
            this.plannedEndTime = plannedEndTime;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getPlannedStartTime}
         * @param plannedStartTime Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period).
         *                         The format is YYYY-MM-DDThh:mm:ssZ (UTC).
         * @return {@code this}
         */
        public Builder plannedStartTime(java.lang.String plannedStartTime) {
            this.plannedStartTime = plannedStartTime;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getPlannedStartTime}
         * @param plannedStartTime Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period).
         *                         The format is YYYY-MM-DDThh:mm:ssZ (UTC).
         * @return {@code this}
         */
        public Builder plannedStartTime(com.aliyun.ros.cdk.core.IResolvable plannedStartTime) {
            this.plannedStartTime = plannedStartTime;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBNodesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBNodesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBNodesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBNodesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBNodesProps {
        private final java.lang.Object amount;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object dbNodeType;
        private final java.lang.Object endpointBindList;
        private final java.lang.Object imciSwitch;
        private final java.lang.Object plannedEndTime;
        private final java.lang.Object plannedStartTime;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.amount = software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeType = software.amazon.jsii.Kernel.get(this, "dbNodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointBindList = software.amazon.jsii.Kernel.get(this, "endpointBindList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imciSwitch = software.amazon.jsii.Kernel.get(this, "imciSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.plannedEndTime = software.amazon.jsii.Kernel.get(this, "plannedEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.plannedStartTime = software.amazon.jsii.Kernel.get(this, "plannedStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.amount = java.util.Objects.requireNonNull(builder.amount, "amount is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.dbNodeType = builder.dbNodeType;
            this.endpointBindList = builder.endpointBindList;
            this.imciSwitch = builder.imciSwitch;
            this.plannedEndTime = builder.plannedEndTime;
            this.plannedStartTime = builder.plannedStartTime;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getAmount() {
            return this.amount;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getDbNodeType() {
            return this.dbNodeType;
        }

        @Override
        public final java.lang.Object getEndpointBindList() {
            return this.endpointBindList;
        }

        @Override
        public final java.lang.Object getImciSwitch() {
            return this.imciSwitch;
        }

        @Override
        public final java.lang.Object getPlannedEndTime() {
            return this.plannedEndTime;
        }

        @Override
        public final java.lang.Object getPlannedStartTime() {
            return this.plannedStartTime;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("amount", om.valueToTree(this.getAmount()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            if (this.getDbNodeType() != null) {
                data.set("dbNodeType", om.valueToTree(this.getDbNodeType()));
            }
            if (this.getEndpointBindList() != null) {
                data.set("endpointBindList", om.valueToTree(this.getEndpointBindList()));
            }
            if (this.getImciSwitch() != null) {
                data.set("imciSwitch", om.valueToTree(this.getImciSwitch()));
            }
            if (this.getPlannedEndTime() != null) {
                data.set("plannedEndTime", om.valueToTree(this.getPlannedEndTime()));
            }
            if (this.getPlannedStartTime() != null) {
                data.set("plannedStartTime", om.valueToTree(this.getPlannedStartTime()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.DBNodesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBNodesProps.Jsii$Proxy that = (DBNodesProps.Jsii$Proxy) o;

            if (!amount.equals(that.amount)) return false;
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (this.dbNodeType != null ? !this.dbNodeType.equals(that.dbNodeType) : that.dbNodeType != null) return false;
            if (this.endpointBindList != null ? !this.endpointBindList.equals(that.endpointBindList) : that.endpointBindList != null) return false;
            if (this.imciSwitch != null ? !this.imciSwitch.equals(that.imciSwitch) : that.imciSwitch != null) return false;
            if (this.plannedEndTime != null ? !this.plannedEndTime.equals(that.plannedEndTime) : that.plannedEndTime != null) return false;
            if (this.plannedStartTime != null ? !this.plannedStartTime.equals(that.plannedStartTime) : that.plannedStartTime != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.amount.hashCode();
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.dbNodeType != null ? this.dbNodeType.hashCode() : 0);
            result = 31 * result + (this.endpointBindList != null ? this.endpointBindList.hashCode() : 0);
            result = 31 * result + (this.imciSwitch != null ? this.imciSwitch.hashCode() : 0);
            result = 31 * result + (this.plannedEndTime != null ? this.plannedEndTime.hashCode() : 0);
            result = 31 * result + (this.plannedStartTime != null ? this.plannedStartTime.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
