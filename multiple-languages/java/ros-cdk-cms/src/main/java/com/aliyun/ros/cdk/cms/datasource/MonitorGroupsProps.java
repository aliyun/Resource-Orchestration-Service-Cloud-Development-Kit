package com.aliyun.ros.cdk.cms.datasource;

/**
 * Properties for defining a <code>MonitorGroups</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:37.176Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.datasource.MonitorGroupsProps")
@software.amazon.jsii.Jsii.Proxy(MonitorGroupsProps.Jsii$Proxy.class)
public interface MonitorGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dynamicTagRuleId: The ID of the tag rule.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDynamicTagRuleId() {
        return null;
    }

    /**
     * Property groupId: The IDs of the application groups.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return null;
    }

    /**
     * Property monitorGroupName: The name of the application group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMonitorGroupName() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property type: The type of the application group.
     * <p>
     * Valid values:
     * custom: a self-managed application group.
     * ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
     * kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MonitorGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MonitorGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MonitorGroupsProps> {
        java.lang.Object dynamicTagRuleId;
        java.lang.Object groupId;
        java.lang.Object monitorGroupName;
        java.lang.Object refreshOptions;
        java.lang.Object type;

        /**
         * Sets the value of {@link MonitorGroupsProps#getDynamicTagRuleId}
         * @param dynamicTagRuleId Property dynamicTagRuleId: The ID of the tag rule.
         * @return {@code this}
         */
        public Builder dynamicTagRuleId(java.lang.String dynamicTagRuleId) {
            this.dynamicTagRuleId = dynamicTagRuleId;
            return this;
        }

        /**
         * Sets the value of {@link MonitorGroupsProps#getDynamicTagRuleId}
         * @param dynamicTagRuleId Property dynamicTagRuleId: The ID of the tag rule.
         * @return {@code this}
         */
        public Builder dynamicTagRuleId(com.aliyun.ros.cdk.core.IResolvable dynamicTagRuleId) {
            this.dynamicTagRuleId = dynamicTagRuleId;
            return this;
        }

        /**
         * Sets the value of {@link MonitorGroupsProps#getGroupId}
         * @param groupId Property groupId: The IDs of the application groups.
         * @return {@code this}
         */
        public Builder groupId(java.lang.Number groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link MonitorGroupsProps#getGroupId}
         * @param groupId Property groupId: The IDs of the application groups.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link MonitorGroupsProps#getMonitorGroupName}
         * @param monitorGroupName Property monitorGroupName: The name of the application group.
         * @return {@code this}
         */
        public Builder monitorGroupName(java.lang.String monitorGroupName) {
            this.monitorGroupName = monitorGroupName;
            return this;
        }

        /**
         * Sets the value of {@link MonitorGroupsProps#getMonitorGroupName}
         * @param monitorGroupName Property monitorGroupName: The name of the application group.
         * @return {@code this}
         */
        public Builder monitorGroupName(com.aliyun.ros.cdk.core.IResolvable monitorGroupName) {
            this.monitorGroupName = monitorGroupName;
            return this;
        }

        /**
         * Sets the value of {@link MonitorGroupsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link MonitorGroupsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link MonitorGroupsProps#getType}
         * @param type Property type: The type of the application group.
         *             Valid values:
         *             custom: a self-managed application group.
         *             ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
         *             kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link MonitorGroupsProps#getType}
         * @param type Property type: The type of the application group.
         *             Valid values:
         *             custom: a self-managed application group.
         *             ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
         *             kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MonitorGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MonitorGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MonitorGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MonitorGroupsProps {
        private final java.lang.Object dynamicTagRuleId;
        private final java.lang.Object groupId;
        private final java.lang.Object monitorGroupName;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dynamicTagRuleId = software.amazon.jsii.Kernel.get(this, "dynamicTagRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.monitorGroupName = software.amazon.jsii.Kernel.get(this, "monitorGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dynamicTagRuleId = builder.dynamicTagRuleId;
            this.groupId = builder.groupId;
            this.monitorGroupName = builder.monitorGroupName;
            this.refreshOptions = builder.refreshOptions;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getDynamicTagRuleId() {
            return this.dynamicTagRuleId;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getMonitorGroupName() {
            return this.monitorGroupName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDynamicTagRuleId() != null) {
                data.set("dynamicTagRuleId", om.valueToTree(this.getDynamicTagRuleId()));
            }
            if (this.getGroupId() != null) {
                data.set("groupId", om.valueToTree(this.getGroupId()));
            }
            if (this.getMonitorGroupName() != null) {
                data.set("monitorGroupName", om.valueToTree(this.getMonitorGroupName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.datasource.MonitorGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MonitorGroupsProps.Jsii$Proxy that = (MonitorGroupsProps.Jsii$Proxy) o;

            if (this.dynamicTagRuleId != null ? !this.dynamicTagRuleId.equals(that.dynamicTagRuleId) : that.dynamicTagRuleId != null) return false;
            if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
            if (this.monitorGroupName != null ? !this.monitorGroupName.equals(that.monitorGroupName) : that.monitorGroupName != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dynamicTagRuleId != null ? this.dynamicTagRuleId.hashCode() : 0;
            result = 31 * result + (this.groupId != null ? this.groupId.hashCode() : 0);
            result = 31 * result + (this.monitorGroupName != null ? this.monitorGroupName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
