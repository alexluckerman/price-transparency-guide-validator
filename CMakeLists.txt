cmake_minimum_required(VERSION 3.10) # CMake version check
project(PriceTransparencyGuideValidator) # Create project "PriceTransparencyGuideValidator"
set(CMAKE_CXX_STANDARD 14) # Enable c++14 standard
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

# Add schemavalidator.cpp file of project root directory as source file
set(SOURCE_FILES schemavalidator.cpp)

# Add executable target with source files listed in SOURCE_FILES variable
add_executable(validator ${SOURCE_FILES})

target_include_directories(validator PUBLIC rapidjson/include)
target_include_directories(validator PUBLIC tclap/include)
