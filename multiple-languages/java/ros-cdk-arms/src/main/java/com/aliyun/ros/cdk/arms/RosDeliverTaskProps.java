package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>RosDeliverTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.987Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosDeliverTaskProps")
@software.amazon.jsii.Jsii.Proxy(RosDeliverTaskProps.Jsii$Proxy.class)
public interface RosDeliverTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetList();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTaskName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExternalLabel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilterList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilterType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTaskDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDeliverTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDeliverTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDeliverTaskProps> {
        java.lang.Object targetList;
        java.lang.Object taskName;
        java.lang.Object dataSourceId;
        java.lang.Object dataSourceName;
        java.lang.Object externalLabel;
        java.lang.Object filterList;
        java.lang.Object filterType;
        java.lang.Object taskDescription;

        /**
         * Sets the value of {@link RosDeliverTaskProps#getTargetList}
         * @param targetList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetList(com.aliyun.ros.cdk.core.IResolvable targetList) {
            this.targetList = targetList;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getTargetList}
         * @param targetList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetList(java.util.List<? extends java.lang.Object> targetList) {
            this.targetList = targetList;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getTaskName}
         * @param taskName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskName(java.lang.String taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getTaskName}
         * @param taskName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskName(com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getDataSourceId}
         * @param dataSourceId the value to be set.
         * @return {@code this}
         */
        public Builder dataSourceId(java.lang.String dataSourceId) {
            this.dataSourceId = dataSourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getDataSourceId}
         * @param dataSourceId the value to be set.
         * @return {@code this}
         */
        public Builder dataSourceId(com.aliyun.ros.cdk.core.IResolvable dataSourceId) {
            this.dataSourceId = dataSourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getDataSourceName}
         * @param dataSourceName the value to be set.
         * @return {@code this}
         */
        public Builder dataSourceName(java.lang.String dataSourceName) {
            this.dataSourceName = dataSourceName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getDataSourceName}
         * @param dataSourceName the value to be set.
         * @return {@code this}
         */
        public Builder dataSourceName(com.aliyun.ros.cdk.core.IResolvable dataSourceName) {
            this.dataSourceName = dataSourceName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getExternalLabel}
         * @param externalLabel the value to be set.
         * @return {@code this}
         */
        public Builder externalLabel(java.lang.String externalLabel) {
            this.externalLabel = externalLabel;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getExternalLabel}
         * @param externalLabel the value to be set.
         * @return {@code this}
         */
        public Builder externalLabel(com.aliyun.ros.cdk.core.IResolvable externalLabel) {
            this.externalLabel = externalLabel;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getFilterList}
         * @param filterList the value to be set.
         * @return {@code this}
         */
        public Builder filterList(java.lang.String filterList) {
            this.filterList = filterList;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getFilterList}
         * @param filterList the value to be set.
         * @return {@code this}
         */
        public Builder filterList(com.aliyun.ros.cdk.core.IResolvable filterList) {
            this.filterList = filterList;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getFilterType}
         * @param filterType the value to be set.
         * @return {@code this}
         */
        public Builder filterType(java.lang.Boolean filterType) {
            this.filterType = filterType;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getFilterType}
         * @param filterType the value to be set.
         * @return {@code this}
         */
        public Builder filterType(com.aliyun.ros.cdk.core.IResolvable filterType) {
            this.filterType = filterType;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getTaskDescription}
         * @param taskDescription the value to be set.
         * @return {@code this}
         */
        public Builder taskDescription(java.lang.String taskDescription) {
            this.taskDescription = taskDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getTaskDescription}
         * @param taskDescription the value to be set.
         * @return {@code this}
         */
        public Builder taskDescription(com.aliyun.ros.cdk.core.IResolvable taskDescription) {
            this.taskDescription = taskDescription;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDeliverTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDeliverTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDeliverTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDeliverTaskProps {
        private final java.lang.Object targetList;
        private final java.lang.Object taskName;
        private final java.lang.Object dataSourceId;
        private final java.lang.Object dataSourceName;
        private final java.lang.Object externalLabel;
        private final java.lang.Object filterList;
        private final java.lang.Object filterType;
        private final java.lang.Object taskDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.targetList = software.amazon.jsii.Kernel.get(this, "targetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskName = software.amazon.jsii.Kernel.get(this, "taskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataSourceId = software.amazon.jsii.Kernel.get(this, "dataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataSourceName = software.amazon.jsii.Kernel.get(this, "dataSourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.externalLabel = software.amazon.jsii.Kernel.get(this, "externalLabel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filterList = software.amazon.jsii.Kernel.get(this, "filterList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filterType = software.amazon.jsii.Kernel.get(this, "filterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskDescription = software.amazon.jsii.Kernel.get(this, "taskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.targetList = java.util.Objects.requireNonNull(builder.targetList, "targetList is required");
            this.taskName = java.util.Objects.requireNonNull(builder.taskName, "taskName is required");
            this.dataSourceId = builder.dataSourceId;
            this.dataSourceName = builder.dataSourceName;
            this.externalLabel = builder.externalLabel;
            this.filterList = builder.filterList;
            this.filterType = builder.filterType;
            this.taskDescription = builder.taskDescription;
        }

        @Override
        public final java.lang.Object getTargetList() {
            return this.targetList;
        }

        @Override
        public final java.lang.Object getTaskName() {
            return this.taskName;
        }

        @Override
        public final java.lang.Object getDataSourceId() {
            return this.dataSourceId;
        }

        @Override
        public final java.lang.Object getDataSourceName() {
            return this.dataSourceName;
        }

        @Override
        public final java.lang.Object getExternalLabel() {
            return this.externalLabel;
        }

        @Override
        public final java.lang.Object getFilterList() {
            return this.filterList;
        }

        @Override
        public final java.lang.Object getFilterType() {
            return this.filterType;
        }

        @Override
        public final java.lang.Object getTaskDescription() {
            return this.taskDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("targetList", om.valueToTree(this.getTargetList()));
            data.set("taskName", om.valueToTree(this.getTaskName()));
            if (this.getDataSourceId() != null) {
                data.set("dataSourceId", om.valueToTree(this.getDataSourceId()));
            }
            if (this.getDataSourceName() != null) {
                data.set("dataSourceName", om.valueToTree(this.getDataSourceName()));
            }
            if (this.getExternalLabel() != null) {
                data.set("externalLabel", om.valueToTree(this.getExternalLabel()));
            }
            if (this.getFilterList() != null) {
                data.set("filterList", om.valueToTree(this.getFilterList()));
            }
            if (this.getFilterType() != null) {
                data.set("filterType", om.valueToTree(this.getFilterType()));
            }
            if (this.getTaskDescription() != null) {
                data.set("taskDescription", om.valueToTree(this.getTaskDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RosDeliverTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDeliverTaskProps.Jsii$Proxy that = (RosDeliverTaskProps.Jsii$Proxy) o;

            if (!targetList.equals(that.targetList)) return false;
            if (!taskName.equals(that.taskName)) return false;
            if (this.dataSourceId != null ? !this.dataSourceId.equals(that.dataSourceId) : that.dataSourceId != null) return false;
            if (this.dataSourceName != null ? !this.dataSourceName.equals(that.dataSourceName) : that.dataSourceName != null) return false;
            if (this.externalLabel != null ? !this.externalLabel.equals(that.externalLabel) : that.externalLabel != null) return false;
            if (this.filterList != null ? !this.filterList.equals(that.filterList) : that.filterList != null) return false;
            if (this.filterType != null ? !this.filterType.equals(that.filterType) : that.filterType != null) return false;
            return this.taskDescription != null ? this.taskDescription.equals(that.taskDescription) : that.taskDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.targetList.hashCode();
            result = 31 * result + (this.taskName.hashCode());
            result = 31 * result + (this.dataSourceId != null ? this.dataSourceId.hashCode() : 0);
            result = 31 * result + (this.dataSourceName != null ? this.dataSourceName.hashCode() : 0);
            result = 31 * result + (this.externalLabel != null ? this.externalLabel.hashCode() : 0);
            result = 31 * result + (this.filterList != null ? this.filterList.hashCode() : 0);
            result = 31 * result + (this.filterType != null ? this.filterType.hashCode() : 0);
            result = 31 * result + (this.taskDescription != null ? this.taskDescription.hashCode() : 0);
            return result;
        }
    }
}
