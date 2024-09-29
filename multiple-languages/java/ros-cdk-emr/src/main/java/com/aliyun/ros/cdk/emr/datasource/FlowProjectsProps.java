package com.aliyun.ros.cdk.emr.datasource;

/**
 * Properties for defining a <code>FlowProjects</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:39.576Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.datasource.FlowProjectsProps")
@software.amazon.jsii.Jsii.Proxy(FlowProjectsProps.Jsii$Proxy.class)
public interface FlowProjectsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property flowProjectId: The first ID of the resource.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowProjectId() {
        return null;
    }

    /**
     * Property flowProjectName: Project name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowProjectName() {
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
     * @return a {@link Builder} of {@link FlowProjectsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FlowProjectsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FlowProjectsProps> {
        java.lang.Object flowProjectId;
        java.lang.Object flowProjectName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link FlowProjectsProps#getFlowProjectId}
         * @param flowProjectId Property flowProjectId: The first ID of the resource.
         * @return {@code this}
         */
        public Builder flowProjectId(java.lang.String flowProjectId) {
            this.flowProjectId = flowProjectId;
            return this;
        }

        /**
         * Sets the value of {@link FlowProjectsProps#getFlowProjectId}
         * @param flowProjectId Property flowProjectId: The first ID of the resource.
         * @return {@code this}
         */
        public Builder flowProjectId(com.aliyun.ros.cdk.core.IResolvable flowProjectId) {
            this.flowProjectId = flowProjectId;
            return this;
        }

        /**
         * Sets the value of {@link FlowProjectsProps#getFlowProjectName}
         * @param flowProjectName Property flowProjectName: Project name.
         * @return {@code this}
         */
        public Builder flowProjectName(java.lang.String flowProjectName) {
            this.flowProjectName = flowProjectName;
            return this;
        }

        /**
         * Sets the value of {@link FlowProjectsProps#getFlowProjectName}
         * @param flowProjectName Property flowProjectName: Project name.
         * @return {@code this}
         */
        public Builder flowProjectName(com.aliyun.ros.cdk.core.IResolvable flowProjectName) {
            this.flowProjectName = flowProjectName;
            return this;
        }

        /**
         * Sets the value of {@link FlowProjectsProps#getRefreshOptions}
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
         * Sets the value of {@link FlowProjectsProps#getRefreshOptions}
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
         * @return a new instance of {@link FlowProjectsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FlowProjectsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FlowProjectsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FlowProjectsProps {
        private final java.lang.Object flowProjectId;
        private final java.lang.Object flowProjectName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.flowProjectId = software.amazon.jsii.Kernel.get(this, "flowProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowProjectName = software.amazon.jsii.Kernel.get(this, "flowProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.flowProjectId = builder.flowProjectId;
            this.flowProjectName = builder.flowProjectName;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getFlowProjectId() {
            return this.flowProjectId;
        }

        @Override
        public final java.lang.Object getFlowProjectName() {
            return this.flowProjectName;
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

            if (this.getFlowProjectId() != null) {
                data.set("flowProjectId", om.valueToTree(this.getFlowProjectId()));
            }
            if (this.getFlowProjectName() != null) {
                data.set("flowProjectName", om.valueToTree(this.getFlowProjectName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.datasource.FlowProjectsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FlowProjectsProps.Jsii$Proxy that = (FlowProjectsProps.Jsii$Proxy) o;

            if (this.flowProjectId != null ? !this.flowProjectId.equals(that.flowProjectId) : that.flowProjectId != null) return false;
            if (this.flowProjectName != null ? !this.flowProjectName.equals(that.flowProjectName) : that.flowProjectName != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.flowProjectId != null ? this.flowProjectId.hashCode() : 0;
            result = 31 * result + (this.flowProjectName != null ? this.flowProjectName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
