package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>Flowlog</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-flowlog
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.111Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.FlowlogProps")
@software.amazon.jsii.Jsii.Proxy(FlowlogProps.Jsii$Proxy.class)
public interface FlowlogProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cenId: The ID of the CEN instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property description: The description of the flow log.
     * <p>
     * The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property flowLogName: The flow log name.
     * <p>
     * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowLogName() {
        return null;
    }

    /**
     * Property interval: The time window for collecting log data.
     * <p>
     * Unit: seconds. Valid values: 60 and 600. Default value: 600.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
        return null;
    }

    /**
     * Property logFormatString: The strings that define the fields in the flow log.
     * <p>
     * Format: ${Field 1}${Field 2}${Field 3}...{Field n}
     * <p>
     * <ul>
     * <li>If you do not configure this parameter, all fields are included in the flow log.</li>
     * <li>If you configure this parameter, start the string with ${srcaddr}${dstaddr}${bytes} because ${srcaddr}${dstaddr}${bytes} are required variables.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogFormatString() {
        return null;
    }

    /**
     * Property logStoreName: The Logstore that stores the captured traffic data.
     * <p>
     * <ul>
     * <li>If a Logstore is already created in the selected region, enter the name of the Logstore.</li>
     * <li>If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
     * ** The name must be unique in a project.
     * ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
     * ** The name must start and end with a lowercase letter or a digit.
     * ** The name must be 3 to 63 characters in length.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogStoreName() {
        return null;
    }

    /**
     * Property projectName: The project that stores the captured traffic data.
     * <p>
     * <ul>
     * <li>If a project is already created in the selected region, enter the name of the project.</li>
     * <li>If no projects are created in the selected region, enter a name and the system automatically creates a project.
     * The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
     * ** The name must be globally unique.
     * ** The name can contain only lowercase letters, digits, and hyphens (-).
     * ** The name must start and end with a lowercase letter or a digit.
     * ** The name must be 3 to 63 characters in length.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProjectName() {
        return null;
    }

    /**
     * Property tags: Tags of flow log.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cen.RosFlowlog.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
     * <p>
     * If you create the flow log for a transfer router, skip this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentId() {
        return null;
    }

    /**
     * Property transitRouterId: The ID of the transit router.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FlowlogProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FlowlogProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FlowlogProps> {
        java.lang.Object cenId;
        java.lang.Object description;
        java.lang.Object flowLogName;
        java.lang.Object interval;
        java.lang.Object logFormatString;
        java.lang.Object logStoreName;
        java.lang.Object projectName;
        java.util.List<com.aliyun.ros.cdk.cen.RosFlowlog.TagsProperty> tags;
        java.lang.Object transitRouterAttachmentId;
        java.lang.Object transitRouterId;

        /**
         * Sets the value of {@link FlowlogProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getDescription}
         * @param description Property description: The description of the flow log.
         *                    The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getDescription}
         * @param description Property description: The description of the flow log.
         *                    The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getFlowLogName}
         * @param flowLogName Property flowLogName: The flow log name.
         *                    The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder flowLogName(java.lang.String flowLogName) {
            this.flowLogName = flowLogName;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getFlowLogName}
         * @param flowLogName Property flowLogName: The flow log name.
         *                    The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder flowLogName(com.aliyun.ros.cdk.core.IResolvable flowLogName) {
            this.flowLogName = flowLogName;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getInterval}
         * @param interval Property interval: The time window for collecting log data.
         *                 Unit: seconds. Valid values: 60 and 600. Default value: 600.
         * @return {@code this}
         */
        public Builder interval(java.lang.Number interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getInterval}
         * @param interval Property interval: The time window for collecting log data.
         *                 Unit: seconds. Valid values: 60 and 600. Default value: 600.
         * @return {@code this}
         */
        public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getLogFormatString}
         * @param logFormatString Property logFormatString: The strings that define the fields in the flow log.
         *                        Format: ${Field 1}${Field 2}${Field 3}...{Field n}
         *                        <p>
         *                        <ul>
         *                        <li>If you do not configure this parameter, all fields are included in the flow log.</li>
         *                        <li>If you configure this parameter, start the string with ${srcaddr}${dstaddr}${bytes} because ${srcaddr}${dstaddr}${bytes} are required variables.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder logFormatString(java.lang.String logFormatString) {
            this.logFormatString = logFormatString;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getLogFormatString}
         * @param logFormatString Property logFormatString: The strings that define the fields in the flow log.
         *                        Format: ${Field 1}${Field 2}${Field 3}...{Field n}
         *                        <p>
         *                        <ul>
         *                        <li>If you do not configure this parameter, all fields are included in the flow log.</li>
         *                        <li>If you configure this parameter, start the string with ${srcaddr}${dstaddr}${bytes} because ${srcaddr}${dstaddr}${bytes} are required variables.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder logFormatString(com.aliyun.ros.cdk.core.IResolvable logFormatString) {
            this.logFormatString = logFormatString;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getLogStoreName}
         * @param logStoreName Property logStoreName: The Logstore that stores the captured traffic data.
         *                     <ul>
         *                     <li>If a Logstore is already created in the selected region, enter the name of the Logstore.</li>
         *                     <li>If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
         *                     ** The name must be unique in a project.
         *                     ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
         *                     ** The name must start and end with a lowercase letter or a digit.
         *                     ** The name must be 3 to 63 characters in length.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder logStoreName(java.lang.String logStoreName) {
            this.logStoreName = logStoreName;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getLogStoreName}
         * @param logStoreName Property logStoreName: The Logstore that stores the captured traffic data.
         *                     <ul>
         *                     <li>If a Logstore is already created in the selected region, enter the name of the Logstore.</li>
         *                     <li>If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
         *                     ** The name must be unique in a project.
         *                     ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
         *                     ** The name must start and end with a lowercase letter or a digit.
         *                     ** The name must be 3 to 63 characters in length.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder logStoreName(com.aliyun.ros.cdk.core.IResolvable logStoreName) {
            this.logStoreName = logStoreName;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getProjectName}
         * @param projectName Property projectName: The project that stores the captured traffic data.
         *                    <ul>
         *                    <li>If a project is already created in the selected region, enter the name of the project.</li>
         *                    <li>If no projects are created in the selected region, enter a name and the system automatically creates a project.
         *                    The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
         *                    ** The name must be globally unique.
         *                    ** The name can contain only lowercase letters, digits, and hyphens (-).
         *                    ** The name must start and end with a lowercase letter or a digit.
         *                    ** The name must be 3 to 63 characters in length.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getProjectName}
         * @param projectName Property projectName: The project that stores the captured traffic data.
         *                    <ul>
         *                    <li>If a project is already created in the selected region, enter the name of the project.</li>
         *                    <li>If no projects are created in the selected region, enter a name and the system automatically creates a project.
         *                    The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
         *                    ** The name must be globally unique.
         *                    ** The name can contain only lowercase letters, digits, and hyphens (-).
         *                    ** The name must start and end with a lowercase letter or a digit.
         *                    ** The name must be 3 to 63 characters in length.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getTags}
         * @param tags Property tags: Tags of flow log.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cen.RosFlowlog.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cen.RosFlowlog.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
         *                                  If you create the flow log for a transfer router, skip this parameter.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(java.lang.String transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getTransitRouterAttachmentId}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
         *                                  If you create the flow log for a transfer router, skip this parameter.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentId(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.transitRouterAttachmentId = transitRouterAttachmentId;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: The ID of the transit router.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link FlowlogProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: The ID of the transit router.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FlowlogProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FlowlogProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FlowlogProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FlowlogProps {
        private final java.lang.Object cenId;
        private final java.lang.Object description;
        private final java.lang.Object flowLogName;
        private final java.lang.Object interval;
        private final java.lang.Object logFormatString;
        private final java.lang.Object logStoreName;
        private final java.lang.Object projectName;
        private final java.util.List<com.aliyun.ros.cdk.cen.RosFlowlog.TagsProperty> tags;
        private final java.lang.Object transitRouterAttachmentId;
        private final java.lang.Object transitRouterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowLogName = software.amazon.jsii.Kernel.get(this, "flowLogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logFormatString = software.amazon.jsii.Kernel.get(this, "logFormatString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logStoreName = software.amazon.jsii.Kernel.get(this, "logStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.RosFlowlog.TagsProperty.class)));
            this.transitRouterAttachmentId = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.description = builder.description;
            this.flowLogName = builder.flowLogName;
            this.interval = builder.interval;
            this.logFormatString = builder.logFormatString;
            this.logStoreName = builder.logStoreName;
            this.projectName = builder.projectName;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cen.RosFlowlog.TagsProperty>)builder.tags;
            this.transitRouterAttachmentId = builder.transitRouterAttachmentId;
            this.transitRouterId = builder.transitRouterId;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getFlowLogName() {
            return this.flowLogName;
        }

        @Override
        public final java.lang.Object getInterval() {
            return this.interval;
        }

        @Override
        public final java.lang.Object getLogFormatString() {
            return this.logFormatString;
        }

        @Override
        public final java.lang.Object getLogStoreName() {
            return this.logStoreName;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cen.RosFlowlog.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentId() {
            return this.transitRouterAttachmentId;
        }

        @Override
        public final java.lang.Object getTransitRouterId() {
            return this.transitRouterId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getFlowLogName() != null) {
                data.set("flowLogName", om.valueToTree(this.getFlowLogName()));
            }
            if (this.getInterval() != null) {
                data.set("interval", om.valueToTree(this.getInterval()));
            }
            if (this.getLogFormatString() != null) {
                data.set("logFormatString", om.valueToTree(this.getLogFormatString()));
            }
            if (this.getLogStoreName() != null) {
                data.set("logStoreName", om.valueToTree(this.getLogStoreName()));
            }
            if (this.getProjectName() != null) {
                data.set("projectName", om.valueToTree(this.getProjectName()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTransitRouterAttachmentId() != null) {
                data.set("transitRouterAttachmentId", om.valueToTree(this.getTransitRouterAttachmentId()));
            }
            if (this.getTransitRouterId() != null) {
                data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.FlowlogProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FlowlogProps.Jsii$Proxy that = (FlowlogProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.flowLogName != null ? !this.flowLogName.equals(that.flowLogName) : that.flowLogName != null) return false;
            if (this.interval != null ? !this.interval.equals(that.interval) : that.interval != null) return false;
            if (this.logFormatString != null ? !this.logFormatString.equals(that.logFormatString) : that.logFormatString != null) return false;
            if (this.logStoreName != null ? !this.logStoreName.equals(that.logStoreName) : that.logStoreName != null) return false;
            if (this.projectName != null ? !this.projectName.equals(that.projectName) : that.projectName != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.transitRouterAttachmentId != null ? !this.transitRouterAttachmentId.equals(that.transitRouterAttachmentId) : that.transitRouterAttachmentId != null) return false;
            return this.transitRouterId != null ? this.transitRouterId.equals(that.transitRouterId) : that.transitRouterId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.flowLogName != null ? this.flowLogName.hashCode() : 0);
            result = 31 * result + (this.interval != null ? this.interval.hashCode() : 0);
            result = 31 * result + (this.logFormatString != null ? this.logFormatString.hashCode() : 0);
            result = 31 * result + (this.logStoreName != null ? this.logStoreName.hashCode() : 0);
            result = 31 * result + (this.projectName != null ? this.projectName.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentId != null ? this.transitRouterAttachmentId.hashCode() : 0);
            result = 31 * result + (this.transitRouterId != null ? this.transitRouterId.hashCode() : 0);
            return result;
        }
    }
}
