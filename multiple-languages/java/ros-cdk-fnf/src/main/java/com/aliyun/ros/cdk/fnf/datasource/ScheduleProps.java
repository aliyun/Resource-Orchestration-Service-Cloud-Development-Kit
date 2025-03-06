package com.aliyun.ros.cdk.fnf.datasource;

/**
 * Properties for defining a <code>Schedule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.034Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.datasource.ScheduleProps")
@software.amazon.jsii.Jsii.Proxy(ScheduleProps.Jsii$Proxy.class)
public interface ScheduleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property flowName: The name of the flow that is associated with the time-based schedule.
     * <p>
     * The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (<em>), and hyphens (-).
     * The name must start with a letter or an underscore (</em>).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFlowName();

    /**
     * Property scheduleName: The name of the time-based schedule.
     * <p>
     * The name must meet the following conventions:
     * The name can contain letters, digits, underscores (<em>), and hyphens (-).
     * The name must start with a letter or an underscore (</em>).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScheduleName();

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
     * @return a {@link Builder} of {@link ScheduleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScheduleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScheduleProps> {
        java.lang.Object flowName;
        java.lang.Object scheduleName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link ScheduleProps#getFlowName}
         * @param flowName Property flowName: The name of the flow that is associated with the time-based schedule. This parameter is required.
         *                 The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
         *                 The name can contain letters, digits, underscores (<em>), and hyphens (-).
         *                 The name must start with a letter or an underscore (</em>).
         *                 The name is case-sensitive.
         *                 The name must be 1 to 128 characters in length.
         * @return {@code this}
         */
        public Builder flowName(java.lang.String flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Sets the value of {@link ScheduleProps#getFlowName}
         * @param flowName Property flowName: The name of the flow that is associated with the time-based schedule. This parameter is required.
         *                 The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
         *                 The name can contain letters, digits, underscores (<em>), and hyphens (-).
         *                 The name must start with a letter or an underscore (</em>).
         *                 The name is case-sensitive.
         *                 The name must be 1 to 128 characters in length.
         * @return {@code this}
         */
        public Builder flowName(com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Sets the value of {@link ScheduleProps#getScheduleName}
         * @param scheduleName Property scheduleName: The name of the time-based schedule. This parameter is required.
         *                     The name must meet the following conventions:
         *                     The name can contain letters, digits, underscores (<em>), and hyphens (-).
         *                     The name must start with a letter or an underscore (</em>).
         *                     The name is case-sensitive.
         *                     The name must be 1 to 128 characters in length.
         * @return {@code this}
         */
        public Builder scheduleName(java.lang.String scheduleName) {
            this.scheduleName = scheduleName;
            return this;
        }

        /**
         * Sets the value of {@link ScheduleProps#getScheduleName}
         * @param scheduleName Property scheduleName: The name of the time-based schedule. This parameter is required.
         *                     The name must meet the following conventions:
         *                     The name can contain letters, digits, underscores (<em>), and hyphens (-).
         *                     The name must start with a letter or an underscore (</em>).
         *                     The name is case-sensitive.
         *                     The name must be 1 to 128 characters in length.
         * @return {@code this}
         */
        public Builder scheduleName(com.aliyun.ros.cdk.core.IResolvable scheduleName) {
            this.scheduleName = scheduleName;
            return this;
        }

        /**
         * Sets the value of {@link ScheduleProps#getRefreshOptions}
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
         * Sets the value of {@link ScheduleProps#getRefreshOptions}
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
         * Builds the configured instance.
         * @return a new instance of {@link ScheduleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScheduleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ScheduleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScheduleProps {
        private final java.lang.Object flowName;
        private final java.lang.Object scheduleName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.flowName = software.amazon.jsii.Kernel.get(this, "flowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduleName = software.amazon.jsii.Kernel.get(this, "scheduleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.flowName = java.util.Objects.requireNonNull(builder.flowName, "flowName is required");
            this.scheduleName = java.util.Objects.requireNonNull(builder.scheduleName, "scheduleName is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getFlowName() {
            return this.flowName;
        }

        @Override
        public final java.lang.Object getScheduleName() {
            return this.scheduleName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("flowName", om.valueToTree(this.getFlowName()));
            data.set("scheduleName", om.valueToTree(this.getScheduleName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fnf.datasource.ScheduleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScheduleProps.Jsii$Proxy that = (ScheduleProps.Jsii$Proxy) o;

            if (!flowName.equals(that.flowName)) return false;
            if (!scheduleName.equals(that.scheduleName)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.flowName.hashCode();
            result = 31 * result + (this.scheduleName.hashCode());
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
