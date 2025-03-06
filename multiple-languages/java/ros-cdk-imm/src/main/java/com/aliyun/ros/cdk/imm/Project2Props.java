package com.aliyun.ros.cdk.imm;

/**
 * Properties for defining a <code>Project2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.601Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.imm.$Module.class, fqn = "@alicloud/ros-cdk-imm.Project2Props")
@software.amazon.jsii.Jsii.Proxy(Project2Props.Jsii$Proxy.class)
public interface Project2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property projectName: The name of project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property datasetMaxBindCount: The maximum number of bindings for each dataset.
     * <p>
     * Valid values: 1 to 10. Default value: 10.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatasetMaxBindCount() {
        return null;
    }

    /**
     * Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset.
     * <p>
     * Default value: 10000000000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatasetMaxEntityCount() {
        return null;
    }

    /**
     * Property datasetMaxFileCount: The maximum number of files in each dataset.
     * <p>
     * Valid values: 1 to 100000000. Default value: 100000000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatasetMaxFileCount() {
        return null;
    }

    /**
     * Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset.
     * <p>
     * Default value: 100000000000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatasetMaxRelationCount() {
        return null;
    }

    /**
     * Property datasetMaxTotalFileSize: The maximum size of files in each dataset.
     * <p>
     * If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatasetMaxTotalFileSize() {
        return null;
    }

    /**
     * Property description: The description of project.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property projectMaxDatasetCount: The maximum number of datasets in the project.
     * <p>
     * Valid values: 1 to 1000000000. Default value: 1000000000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProjectMaxDatasetCount() {
        return null;
    }

    /**
     * Property serviceRole: 	The name of the Resource Access Management (RAM) role.
     * <p>
     * You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceRole() {
        return null;
    }

    /**
     * Property templateId: The ID of the workflow template.
     * <p>
     * You can leave this parameter empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link Project2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link Project2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<Project2Props> {
        java.lang.Object projectName;
        java.lang.Object datasetMaxBindCount;
        java.lang.Object datasetMaxEntityCount;
        java.lang.Object datasetMaxFileCount;
        java.lang.Object datasetMaxRelationCount;
        java.lang.Object datasetMaxTotalFileSize;
        java.lang.Object description;
        java.lang.Object projectMaxDatasetCount;
        java.lang.Object serviceRole;
        java.lang.Object templateId;

        /**
         * Sets the value of {@link Project2Props#getProjectName}
         * @param projectName Property projectName: The name of project. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getProjectName}
         * @param projectName Property projectName: The name of project. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDatasetMaxBindCount}
         * @param datasetMaxBindCount Property datasetMaxBindCount: The maximum number of bindings for each dataset.
         *                            Valid values: 1 to 10. Default value: 10.
         * @return {@code this}
         */
        public Builder datasetMaxBindCount(java.lang.Number datasetMaxBindCount) {
            this.datasetMaxBindCount = datasetMaxBindCount;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDatasetMaxBindCount}
         * @param datasetMaxBindCount Property datasetMaxBindCount: The maximum number of bindings for each dataset.
         *                            Valid values: 1 to 10. Default value: 10.
         * @return {@code this}
         */
        public Builder datasetMaxBindCount(com.aliyun.ros.cdk.core.IResolvable datasetMaxBindCount) {
            this.datasetMaxBindCount = datasetMaxBindCount;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDatasetMaxEntityCount}
         * @param datasetMaxEntityCount Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset.
         *                              Default value: 10000000000.
         * @return {@code this}
         */
        public Builder datasetMaxEntityCount(java.lang.Number datasetMaxEntityCount) {
            this.datasetMaxEntityCount = datasetMaxEntityCount;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDatasetMaxEntityCount}
         * @param datasetMaxEntityCount Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset.
         *                              Default value: 10000000000.
         * @return {@code this}
         */
        public Builder datasetMaxEntityCount(com.aliyun.ros.cdk.core.IResolvable datasetMaxEntityCount) {
            this.datasetMaxEntityCount = datasetMaxEntityCount;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDatasetMaxFileCount}
         * @param datasetMaxFileCount Property datasetMaxFileCount: The maximum number of files in each dataset.
         *                            Valid values: 1 to 100000000. Default value: 100000000.
         * @return {@code this}
         */
        public Builder datasetMaxFileCount(java.lang.Number datasetMaxFileCount) {
            this.datasetMaxFileCount = datasetMaxFileCount;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDatasetMaxFileCount}
         * @param datasetMaxFileCount Property datasetMaxFileCount: The maximum number of files in each dataset.
         *                            Valid values: 1 to 100000000. Default value: 100000000.
         * @return {@code this}
         */
        public Builder datasetMaxFileCount(com.aliyun.ros.cdk.core.IResolvable datasetMaxFileCount) {
            this.datasetMaxFileCount = datasetMaxFileCount;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDatasetMaxRelationCount}
         * @param datasetMaxRelationCount Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset.
         *                                Default value: 100000000000.
         * @return {@code this}
         */
        public Builder datasetMaxRelationCount(java.lang.Number datasetMaxRelationCount) {
            this.datasetMaxRelationCount = datasetMaxRelationCount;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDatasetMaxRelationCount}
         * @param datasetMaxRelationCount Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset.
         *                                Default value: 100000000000.
         * @return {@code this}
         */
        public Builder datasetMaxRelationCount(com.aliyun.ros.cdk.core.IResolvable datasetMaxRelationCount) {
            this.datasetMaxRelationCount = datasetMaxRelationCount;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDatasetMaxTotalFileSize}
         * @param datasetMaxTotalFileSize Property datasetMaxTotalFileSize: The maximum size of files in each dataset.
         *                                If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
         * @return {@code this}
         */
        public Builder datasetMaxTotalFileSize(java.lang.Number datasetMaxTotalFileSize) {
            this.datasetMaxTotalFileSize = datasetMaxTotalFileSize;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDatasetMaxTotalFileSize}
         * @param datasetMaxTotalFileSize Property datasetMaxTotalFileSize: The maximum size of files in each dataset.
         *                                If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
         * @return {@code this}
         */
        public Builder datasetMaxTotalFileSize(com.aliyun.ros.cdk.core.IResolvable datasetMaxTotalFileSize) {
            this.datasetMaxTotalFileSize = datasetMaxTotalFileSize;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDescription}
         * @param description Property description: The description of project.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getDescription}
         * @param description Property description: The description of project.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getProjectMaxDatasetCount}
         * @param projectMaxDatasetCount Property projectMaxDatasetCount: The maximum number of datasets in the project.
         *                               Valid values: 1 to 1000000000. Default value: 1000000000.
         * @return {@code this}
         */
        public Builder projectMaxDatasetCount(java.lang.Number projectMaxDatasetCount) {
            this.projectMaxDatasetCount = projectMaxDatasetCount;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getProjectMaxDatasetCount}
         * @param projectMaxDatasetCount Property projectMaxDatasetCount: The maximum number of datasets in the project.
         *                               Valid values: 1 to 1000000000. Default value: 1000000000.
         * @return {@code this}
         */
        public Builder projectMaxDatasetCount(com.aliyun.ros.cdk.core.IResolvable projectMaxDatasetCount) {
            this.projectMaxDatasetCount = projectMaxDatasetCount;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getServiceRole}
         * @param serviceRole Property serviceRole: 	The name of the Resource Access Management (RAM) role.
         *                    You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
         * @return {@code this}
         */
        public Builder serviceRole(java.lang.String serviceRole) {
            this.serviceRole = serviceRole;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getServiceRole}
         * @param serviceRole Property serviceRole: 	The name of the Resource Access Management (RAM) role.
         *                    You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
         * @return {@code this}
         */
        public Builder serviceRole(com.aliyun.ros.cdk.core.IResolvable serviceRole) {
            this.serviceRole = serviceRole;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getTemplateId}
         * @param templateId Property templateId: The ID of the workflow template.
         *                   You can leave this parameter empty.
         * @return {@code this}
         */
        public Builder templateId(java.lang.String templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link Project2Props#getTemplateId}
         * @param templateId Property templateId: The ID of the workflow template.
         *                   You can leave this parameter empty.
         * @return {@code this}
         */
        public Builder templateId(com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link Project2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public Project2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link Project2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements Project2Props {
        private final java.lang.Object projectName;
        private final java.lang.Object datasetMaxBindCount;
        private final java.lang.Object datasetMaxEntityCount;
        private final java.lang.Object datasetMaxFileCount;
        private final java.lang.Object datasetMaxRelationCount;
        private final java.lang.Object datasetMaxTotalFileSize;
        private final java.lang.Object description;
        private final java.lang.Object projectMaxDatasetCount;
        private final java.lang.Object serviceRole;
        private final java.lang.Object templateId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.datasetMaxBindCount = software.amazon.jsii.Kernel.get(this, "datasetMaxBindCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.datasetMaxEntityCount = software.amazon.jsii.Kernel.get(this, "datasetMaxEntityCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.datasetMaxFileCount = software.amazon.jsii.Kernel.get(this, "datasetMaxFileCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.datasetMaxRelationCount = software.amazon.jsii.Kernel.get(this, "datasetMaxRelationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.datasetMaxTotalFileSize = software.amazon.jsii.Kernel.get(this, "datasetMaxTotalFileSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectMaxDatasetCount = software.amazon.jsii.Kernel.get(this, "projectMaxDatasetCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceRole = software.amazon.jsii.Kernel.get(this, "serviceRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.datasetMaxBindCount = builder.datasetMaxBindCount;
            this.datasetMaxEntityCount = builder.datasetMaxEntityCount;
            this.datasetMaxFileCount = builder.datasetMaxFileCount;
            this.datasetMaxRelationCount = builder.datasetMaxRelationCount;
            this.datasetMaxTotalFileSize = builder.datasetMaxTotalFileSize;
            this.description = builder.description;
            this.projectMaxDatasetCount = builder.projectMaxDatasetCount;
            this.serviceRole = builder.serviceRole;
            this.templateId = builder.templateId;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getDatasetMaxBindCount() {
            return this.datasetMaxBindCount;
        }

        @Override
        public final java.lang.Object getDatasetMaxEntityCount() {
            return this.datasetMaxEntityCount;
        }

        @Override
        public final java.lang.Object getDatasetMaxFileCount() {
            return this.datasetMaxFileCount;
        }

        @Override
        public final java.lang.Object getDatasetMaxRelationCount() {
            return this.datasetMaxRelationCount;
        }

        @Override
        public final java.lang.Object getDatasetMaxTotalFileSize() {
            return this.datasetMaxTotalFileSize;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getProjectMaxDatasetCount() {
            return this.projectMaxDatasetCount;
        }

        @Override
        public final java.lang.Object getServiceRole() {
            return this.serviceRole;
        }

        @Override
        public final java.lang.Object getTemplateId() {
            return this.templateId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("projectName", om.valueToTree(this.getProjectName()));
            if (this.getDatasetMaxBindCount() != null) {
                data.set("datasetMaxBindCount", om.valueToTree(this.getDatasetMaxBindCount()));
            }
            if (this.getDatasetMaxEntityCount() != null) {
                data.set("datasetMaxEntityCount", om.valueToTree(this.getDatasetMaxEntityCount()));
            }
            if (this.getDatasetMaxFileCount() != null) {
                data.set("datasetMaxFileCount", om.valueToTree(this.getDatasetMaxFileCount()));
            }
            if (this.getDatasetMaxRelationCount() != null) {
                data.set("datasetMaxRelationCount", om.valueToTree(this.getDatasetMaxRelationCount()));
            }
            if (this.getDatasetMaxTotalFileSize() != null) {
                data.set("datasetMaxTotalFileSize", om.valueToTree(this.getDatasetMaxTotalFileSize()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getProjectMaxDatasetCount() != null) {
                data.set("projectMaxDatasetCount", om.valueToTree(this.getProjectMaxDatasetCount()));
            }
            if (this.getServiceRole() != null) {
                data.set("serviceRole", om.valueToTree(this.getServiceRole()));
            }
            if (this.getTemplateId() != null) {
                data.set("templateId", om.valueToTree(this.getTemplateId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-imm.Project2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Project2Props.Jsii$Proxy that = (Project2Props.Jsii$Proxy) o;

            if (!projectName.equals(that.projectName)) return false;
            if (this.datasetMaxBindCount != null ? !this.datasetMaxBindCount.equals(that.datasetMaxBindCount) : that.datasetMaxBindCount != null) return false;
            if (this.datasetMaxEntityCount != null ? !this.datasetMaxEntityCount.equals(that.datasetMaxEntityCount) : that.datasetMaxEntityCount != null) return false;
            if (this.datasetMaxFileCount != null ? !this.datasetMaxFileCount.equals(that.datasetMaxFileCount) : that.datasetMaxFileCount != null) return false;
            if (this.datasetMaxRelationCount != null ? !this.datasetMaxRelationCount.equals(that.datasetMaxRelationCount) : that.datasetMaxRelationCount != null) return false;
            if (this.datasetMaxTotalFileSize != null ? !this.datasetMaxTotalFileSize.equals(that.datasetMaxTotalFileSize) : that.datasetMaxTotalFileSize != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.projectMaxDatasetCount != null ? !this.projectMaxDatasetCount.equals(that.projectMaxDatasetCount) : that.projectMaxDatasetCount != null) return false;
            if (this.serviceRole != null ? !this.serviceRole.equals(that.serviceRole) : that.serviceRole != null) return false;
            return this.templateId != null ? this.templateId.equals(that.templateId) : that.templateId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.projectName.hashCode();
            result = 31 * result + (this.datasetMaxBindCount != null ? this.datasetMaxBindCount.hashCode() : 0);
            result = 31 * result + (this.datasetMaxEntityCount != null ? this.datasetMaxEntityCount.hashCode() : 0);
            result = 31 * result + (this.datasetMaxFileCount != null ? this.datasetMaxFileCount.hashCode() : 0);
            result = 31 * result + (this.datasetMaxRelationCount != null ? this.datasetMaxRelationCount.hashCode() : 0);
            result = 31 * result + (this.datasetMaxTotalFileSize != null ? this.datasetMaxTotalFileSize.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.projectMaxDatasetCount != null ? this.projectMaxDatasetCount.hashCode() : 0);
            result = 31 * result + (this.serviceRole != null ? this.serviceRole.hashCode() : 0);
            result = 31 * result + (this.templateId != null ? this.templateId.hashCode() : 0);
            return result;
        }
    }
}
